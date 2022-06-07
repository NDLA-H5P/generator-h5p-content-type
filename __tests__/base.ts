import path from "path";
import { describe, it } from "vitest";
import assert from "yeoman-assert";
import helpers from "yeoman-test";
import { generatorName } from "../src/_utils/vars";

const generator = "base";
const directory = path.join(__dirname, `../src/${generator}`);

describe(`generator-${generatorName}:${generator}`, () => {
  it("creates files", async () => {
    const title = "My Content Type";
    await helpers.run(directory).withOptions({ title });

    assert.file(["library.json"]);
    assert.file(["semantics.json"]);
  });

  it("creates script file", async () => {
    const title = "My Content Type";
    const titleKebabCase = "my-content-type";

    await helpers.run(directory).withOptions({ title });

    assert.file([`src/${titleKebabCase}.js`]);
  });
});
