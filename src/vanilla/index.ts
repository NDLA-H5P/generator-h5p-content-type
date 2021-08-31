import Generator from "yeoman-generator";

export default class extends Generator {
  constructor(args: string | string[], options: Generator.GeneratorOptions, features?: Generator.GeneratorFeatures) {
    super(args, options, features);

    this.option("title", {
      type: String,
    });

    this.option("isEditor", {
      type: Boolean,
    });
  }

  writing(): void {
    const title: string = this.options.title;
    const isEditor: boolean = this.options.isEditor;

    const baseGeneratorName = isEditor ? "editor-base" : "base";
    this.composeWith(require.resolve(`../${baseGeneratorName}`), { title });
  }
}
