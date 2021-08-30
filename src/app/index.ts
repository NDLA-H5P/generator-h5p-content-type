import type { Answers, Question } from "inquirer";
import Generator from "yeoman-generator";
import yosay from "yosay";

export default class extends Generator {
  private promptAnswers: Answers;

  async prompting(): Promise<void> {
    this.log(yosay("Let's generate an H5P content type!"));

    const prompts: Question[] = [
      {
        type: "list",
        name: "framework",
        message: "Which JS framework do you want to use?",
        default: "vanilla",
        // @ts-expect-error `choices` is valid, but the type definition is not updated yet.
        choices: [{
          name: "Vanilla",
          value: "vanilla",
        },
        {
          name: "TypeScript and React",
          value: "ts-react",
        }],
      }
    ];

    this.promptAnswers = await this.prompt<Question>(prompts);
  }

  writing(): void {
    const framework: "vanilla" | "ts-react" = this.promptAnswers.framework;
    this.composeWith(require.resolve(`../${framework}`));
  }
}
