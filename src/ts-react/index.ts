import type { Answers, Question } from "inquirer";
import Generator from "yeoman-generator";
import { pascalCase, paramCase } from "change-case";
import superb from "superb";
import { generatorName } from "../_utils/vars";

export default class extends Generator {
  private promptAnswers: Answers;

  async prompting(): Promise<void> {
    const prompts: Question[] = [
      {
        type: "input",
        name: "title",
        message: "What is the content type's title?",
        default: "Content Type",
      },
      {
        type: "confirm",
        name: "isEditor",
        message: "Is this an editor content type?",
        default: false,
      }
    ];

    this.promptAnswers = await this.prompt<Question>(prompts);
  }

  writing(): void {
    const title: string = this.promptAnswers.title;
    const titlePascalCase = pascalCase(title);
    const titleKebabCase = paramCase(title);

    const isEditor: boolean = this.promptAnswers.isEditor;

    if (isEditor) {
      this.composeWith(`${generatorName}:editor-base`);
    } else {
      this.composeWith(`${generatorName}:base`);
    }

    this.fs.copyTpl(
      this.templatePath("**/*"),
      this.destinationPath(""),
      {
        title,
        titlePascalCase,
        titleKebabCase,
        superb: superb.random(),
      },
    );

    const library = JSON.parse(this.fs.read("library.json"));
    library.preloadedJs.path = "dist/build.js";
    this.fs.writeJSON("library.json", library);
  }
}
