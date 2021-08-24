import path from "path";
import assert from "yeoman-assert";
import helpers from "yeoman-test";

const generator = "base";
const directory = path.join(__dirname, `../src/${generator}`);

describe(`generator-h-5-p-content-type:${generator}`, () => {
  it("creates files", async () => {
    await helpers.run(directory);

    assert.file(["library.json"]);
    assert.file(["semantics.json"]);
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
