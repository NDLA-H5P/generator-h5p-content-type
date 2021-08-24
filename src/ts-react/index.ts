import chalk from "chalk";
import type { Answers, Question } from "inquirer";
import Generator from "yeoman-generator";
import yosay from "yosay";
import { pascalCase, paramCase } from "change-case";
import superb from "superb";

export default class extends Generator {
  private promptAnswers: Answers;

  async prompting(): Promise<void> {
    this.log(
      yosay(
        `Welcome to the legendary ${chalk.red(
          "generator-h-5-p-content-type"
        )} generator!`
      )
    );

    const prompts: Question[] = [
      {
        type: "input",
        name: "title",
        message: "What is the content type's title?",
        default: "Content Type",
      }
    ];

    this.promptAnswers = await this.prompt<Question>(prompts);
  }

  writing(): void {
    const title: string = this.promptAnswers.title;
    const titlePascalCase = pascalCase(title);
    const titleKebabCase = paramCase(title);

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
  }
};
