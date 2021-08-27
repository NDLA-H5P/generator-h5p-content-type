import type { Answers, Question } from "inquirer";
import Generator from "yeoman-generator";
import path from "path";
import { pascalCase, paramCase } from "change-case";
import superb from "superb";

export default class H5PContentTypeGenerator extends Generator {
  private promptAnswers: Answers;

  async prompting(): Promise<void> {
    const prompts: Question[] = [
      {
        type: "input",
        name: "title",
        message: "What is the content type's title?",
        default: "Content Type",
      }
    ];

    this.promptAnswers = await this.prompt(prompts);
  }

  writing(): void {
    const title: string = this.promptAnswers.title;
    const titlePascalCase = pascalCase(title);
    const titleKebabCase = paramCase(title);

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
      }
    );

    this.fs.copy(
      this.templatePath("semantics.json"),
      this.destinationPath("semantics.json"),
    );

    this.fs.copy(
      this.templatePath(".en.json"),
      this.destinationPath(".en.json"),
    );
  }
}
