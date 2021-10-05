import type { Answers, Question } from "inquirer";
import Generator from "yeoman-generator";
import yosay from "yosay";

export default class extends Generator {
  private promptAnswers: Answers;

  constructor(args, options, features){
    options['skip-install'] = true;
    super(args, options, {customInstallTask: false});
  }

  async prompting(): Promise<void> {
    this.log(yosay("Let's generate an H5P content type!"));

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
      },
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
      },
    ];

    this.promptAnswers = await this.prompt<Question>(prompts);
  }

  writing(): void {
    const framework: "vanilla" | "ts-react" = this.promptAnswers.framework;
    this.composeWith(require.resolve(`../${framework}`), {
      title: this.promptAnswers.title,
      isEditor: this.promptAnswers.isEditor,
      "skip-install": true,
    });
  }

  install(): void {
    this.log("install in app");
  }

  npmInstall():void {
    this.log("npm install in app")
  }
}
