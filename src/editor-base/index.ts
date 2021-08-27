import Generator from "yeoman-generator";
import path from "path";
import superb from "superb";
import { createTitles } from "../_utils/title.utils";

export default class H5PEditorContentTypeGenerator extends Generator {
  constructor(args: string | string[], options: Generator.GeneratorOptions, features?: Generator.GeneratorFeatures) {
    super(args, options, features);

    this.option("title", {
      type: String,
    });
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
        titlePascalCase,
        titleKebabCase,
      }
    );
  }
}
