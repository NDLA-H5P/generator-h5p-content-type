import path from "path";
import assert from "yeoman-assert";
import helpers from "yeoman-test";
import { generatorName } from "../src/_utils/vars";

const generator = "editor-base";
const directory = path.join(__dirname, `../src/${generator}`);

describe(`generator-${generatorName}:${generator}`, () => {
  it("creates files", async () => {
    await helpers.run(directory);

    assert.file(["library.json"]);
    assert.noFile(["semantics.json"]);
  });

  it("creates files", async () => {
    const title = "My Content Type";
    const titleKebabCase = "my-content-type";

    await helpers
      .run(directory)
      .withPrompts({ title });

    assert.file([`src/${titleKebabCase}.js`]);
  });
});
