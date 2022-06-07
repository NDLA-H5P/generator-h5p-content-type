import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: [
      ...configDefaults.exclude,
      "**/templates/**/*",
      "**/temp/**/*",
      "**/generators/**/*",
    ],
    include: [
      ...configDefaults.include,
      "__tests__/**/*.ts"
    ]
  },
});
