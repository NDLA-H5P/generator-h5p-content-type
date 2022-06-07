import path from "path";
import assert from "yeoman-assert";
import helpers from "yeoman-test";
import { generatorName } from "../src/_utils/vars";

const generator = "ts-react";
const directory = path.join(__dirname, `../src/${generator}`);

describe(`generator-${generatorName}:${generator}`, () => {
  it("creates files: content type", async () => {
    await helpers
      .run(directory)
      .withOptions({
        title: "Content Type",
        isEditor: false,
      })
      .withPrompts({
        useStorybook: false,
      });

    // The files can be added all in the same
    // `assert.file([])` call, but this makes the
    // test fail only once, thus telling nothing
    // about what files are missing.

    assert.file(["package.json"]);
    assert.file(["vite.config.ts"]);
    assert.file(["./src/App.tsx"]);
    assert.file(["./src/index.tsx"]);
    assert.file(["./src/h5p/H5PWrapper.tsx"]);
    assert.noFile(["./src/content-type.js"]);
  });

  it("creates files: widget", async () => {
    await helpers
      .run(directory)
      .withOptions({
        title: "Widget",
        isEditor: true,
      })
      .withPrompts({
        useStorybook: false,
      });

    // The files can be added all in the same
    // `assert.file([])` call, but this makes the
    // test fail only once, thus telling nothing
    // about what files are missing.

    assert.file(["package.json"]);
    assert.file(["vite.config.ts"]);
    assert.file(["./src/App.tsx"]);
    assert.file(["./src/index.tsx"]);
    assert.file(["./src/h5p/H5PWrapper.tsx"]);
    assert.file(["./src/h5p/H5P.util.ts"]);
    assert.noFile(["./src/widget.js"]);
  });

  // it("installs Storybook", async () => {
  //   await helpers
  //     .run(directory)
  //     .withOptions({
  //       title: "Content Type",
  //       isEditor: false,
  //     })
  //     .withPrompts({
  //       useStorybook: true,
  //     });

  //   // The files can be added all in the same
  //   // `assert.file([])` call, but this makes the
  //   // test fail only once, thus telling nothing
  //   // about what files are missing.

  //   assert.file([".storybook/main.js"]);
  // });
});
