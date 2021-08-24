import path from "path";
import assert from "yeoman-assert";
import helpers from "yeoman-test";

const generator = "ts-react";
const directory = path.join(__dirname, `../src/${generator}`);

describe(`generator-h-5-p-content-type:${generator}`, () => {
  beforeAll(() => {
    return helpers
      .run(directory)
      .withPrompts({ someAnswer: true });
  });

  it("creates files", () => {
    // The files can be added all in the same
    // `assert.file([])` call, but this makes the
    // test fail only once, thus telling nothing
    // about what files are missing.

    assert.file(["package.json"]);
    assert.file(["webpack.config.js"]);
    assert.file(["./src/App.tsx"]);
    assert.file(["./src/index.tsx"]);
    assert.file(["./src/h5p/H5PWrapper.tsx"]);
  });
});
