import path from "path";
import assert from "yeoman-assert";
import helpers from "yeoman-test";

const generator = "app";
const directory = path.join(__dirname, `../src/${generator}`);

describe(`generator-h5p-content-type:${generator}`, () => {
  beforeAll(() => {
    return helpers
      .run(directory)
      .withPrompts({ someAnswer: true });
  });

  it("creates files", () => {
    assert.file(["dummyfile.txt"]);
  });
});
