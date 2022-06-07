import type { Answers, Question } from "inquirer";
import Generator from "yeoman-generator";
import superb from "superb";
import { createTitles } from "../_utils/title.utils";
import { unlinkSync } from "fs";
import { exec } from "shelljs";

export default class extends Generator {
  private promptAnswers: Answers;

  constructor(
    args: string | string[],
    options: Generator.GeneratorOptions,
    features?: Generator.GeneratorFeatures,
  ) {
    super(args, options, features);

    this.option("title", {
      type: String,
    });

    this.option("isEditor", {
      type: Boolean,
    });
  }

  async prompting(): Promise<void> {
    const prompts: Question[] = [
      {
        type: "confirm",
        name: "useStorybook",
        message: "Do you want Storybook to be set up?",
        default: true,
      },
    ];

    this.promptAnswers = await this.prompt<Question>(prompts);
  }

  writing(): void {
    const title: string = this.options.title;
    const { titlePascalCase, titleKebabCase, titleCamelCase } =
      createTitles(title);

    const isEditor: boolean = this.options.isEditor;

    const baseGeneratorName = isEditor ? "editor-base" : "base";
    this.composeWith(require.resolve(`../${baseGeneratorName}`), { title });

    this.fs.copyTpl(
      this.templatePath("root/**/*"),
      this.destinationPath(""),
      {
        title,
        titlePascalCase,
        titleKebabCase,
        titleCamelCase,
        isEditor,
        useStorybook: this.promptAnswers.useStorybook,
        hasEditor: this.promptAnswers.hasEditor,
      },
      null,
      {
        globOptions: {
          ignore: [
            "**/H5PWrapper.tsx",
            "**/H5PEditorWrapper.tsx",
            "**/H5P.utils.ts",
            "**/node_modules/**/*",
          ],
          dot: true,
        },
      },
    );

    this.fs.copyTpl(
      this.templatePath(
        `root/src/h5p/${isEditor ? "H5PEditorWrapper" : "H5PWrapper"}.tsx`,
      ),
      this.destinationPath("src/h5p/H5PWrapper.tsx"),
      {
        titleKebabCase,
        superb: superb.random(),
      },
    );

    if (isEditor) {
      this.fs.copyTpl(
        this.templatePath(`root/src/h5p/H5P.util.ts`),
        this.destinationPath("src/h5p/H5P.util.ts"),
        {
          titlePascalCase,
        },
      );
    }

    const useStorybook: boolean = this.promptAnswers.useStorybook;
    if (useStorybook) {
      exec("npx sb init --builder @storybook/builder-vite --type react");
    }
  }

  end(): void {
    const title: string = this.options.title;
    const { titleKebabCase } = createTitles(title);

    const library = JSON.parse(
      this.fs.read(this.destinationPath("library.json")),
    );
    library.preloadedJs.path = "dist/build.js";
    this.fs.delete(this.destinationPath("library.json"));
    this.fs.writeJSON(this.destinationPath("library.json"), library);

    unlinkSync(this.destinationPath(`src/${titleKebabCase}.js`));

    if (this.options["skip-install"]) {
      this.log(`To install your dependencies manually, run: "npm install"`);
    } else {
      this.log("installing dependencies");
      exec("npm install");
    }
  }
}
