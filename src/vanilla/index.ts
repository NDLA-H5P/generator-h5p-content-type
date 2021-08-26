import type { Answers, Question } from "inquirer";
import Generator from "yeoman-generator";
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
    const isEditor: boolean = this.promptAnswers.isEditor;

    if (isEditor) {
      this.composeWith(`${generatorName}:editor-base`);
    } else {
      this.composeWith(`${generatorName}:base`);
    }
  }
}
