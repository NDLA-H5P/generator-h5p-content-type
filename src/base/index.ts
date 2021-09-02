import Generator, { Answers, Question } from "yeoman-generator";
import path from "path";
import superb from "superb";
import { createTitles } from "../_utils/title.utils";

export default class H5PContentTypeGenerator extends Generator {
  private promptAnswers: Answers;

  constructor(args: string | string[], options: Generator.GeneratorOptions, features?: Generator.GeneratorFeatures) {
    super(args, options, features);

    this.option("title", {
      type: String,
    });
  }

  async prompting(): Promise<void> {
    const prompts: Question[] = [
      {
        type: "confirm",
        name: "hasEditor",
        message: "Does or will this content type have an editor?",
        default: true,
      },
    ];

    this.promptAnswers = await this.prompt<Question>(prompts);
  }

  writing(): void {
    const title: string = this.options.title;
    const { titlePascalCase, titleKebabCase } = createTitles(title);

    this.fs.copyTpl(
      this.templatePath("content-type.js"),
      this.destinationPath(path.join("src", `${titleKebabCase}.js`)),
      {
        titlePascalCase,
        titleKebabCase,
        superb: superb.random(),
      }
    );

    this.fs.copyTpl(
      this.templatePath("library.json"),
      this.destinationPath("library.json"),
      {
        title,
        titleKebabCase,
        titlePascalCase,
        hasEditor: this.promptAnswers.hasEditor,
      }
    );

    this.fs.copy(
      this.templatePath("semantics.json"),
      this.destinationPath("semantics.json"),
    );

    this.fs.copy(
      this.templatePath(".en.json"),
      this.destinationPath("languages/.en.json"),
    );
  }
}
