import path from "path";
import { describe, it } from "vitest";
import assert from "yeoman-assert";
import helpers from "yeoman-test";
import { generatorName } from "../src/_utils/vars";

const generator = "app";
const directory = path.join(__dirname, `../src/${generator}`);

describe(`generator-${generatorName}:${generator}`, () => {
  it("creates files", async () => {
    await helpers.run(directory).withPrompts({
      title: "Content Type",
      isEditor: false,
      framework: "vanilla",
    });

    assert.file(["src/content-type.js"]);
  });
});
