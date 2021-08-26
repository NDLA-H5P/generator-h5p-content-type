import path from "path";
import assert from "yeoman-assert";
import helpers from "yeoman-test";
import { generatorName } from "../src/_utils/vars";

const generator = "app";
const directory = path.join(__dirname, `../src/${generator}`);

describe(`generator-${generatorName}:${generator}`, () => {
  beforeAll(() => {
    return helpers
      .run(directory)
      .withPrompts({ someAnswer: true });
  });

  it("creates files", () => {
    assert.file(["dummyfile.txt"]);
  });
});
