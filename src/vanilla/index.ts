import type { Answers, Question } from "inquirer";
import Generator from "yeoman-generator";

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
    const isEditor: boolean = this.promptAnswers.isEditor;

    const baseGeneratorName = isEditor ? "editor-base" : "base";
    this.composeWith(require.resolve(`../${baseGeneratorName}`), { title });
  }
}
