import path from "path";
import { describe, it } from "vitest";
import assert from "yeoman-assert";
import helpers from "yeoman-test";
import { generatorName } from "../src/_utils/vars";

const generator = "ts-react";
const directory = path.join(__dirname, `../src/${generator}`);

describe(`generator-${generatorName}:${generator}`, () => {
  it("creates files", async () => {
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
});
