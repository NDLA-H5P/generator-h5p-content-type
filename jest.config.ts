import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testEnvironment: "node",
  transform: {
    ".(js|jsx)": "babel-jest",
    ".(ts|tsx)": "ts-jest"
  },
  testPathIgnorePatterns: ["generators/", "templates/"]
};

export default config;
