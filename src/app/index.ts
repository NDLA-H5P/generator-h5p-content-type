import chalk from "chalk";
import type { Answers, Question } from "inquirer";
import Generator from "yeoman-generator";
import yosay from "yosay";

export default class extends Generator {
  private promptAnswers: Question<Answers>;

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
        type: "confirm",
        name: "someAnswer",
        message: "Would you like to enable this option?",
        default: true
      }
    ];

    this.promptAnswers = await this.prompt<Question>(prompts);
  }

  writing(): void {
    this.fs.copy(
      this.templatePath("dummyfile.txt"),
      this.destinationPath("dummyfile.txt")
    );
  }
};
