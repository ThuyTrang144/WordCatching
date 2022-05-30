import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  preset: "ts-jest",
  verbose: true,
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@features(.*)$": "<rootDir>/src/features$1",
    "^@constants(.*)$": "<rootDir>/src/constants$1",
    "^@helpers(.*)$": "<rootDir>/src/helpers$1",
    "^@common-types(.*)$": "<rootDir>/src/common-types$1",
    "^@assets(.*)$": "<rootDir>/src/assets$1",
    "^@app(.*)$": "<rootDir>/src/app$1",
    "^pages(.*$": "<rootDir>/src/pages$1",
    "^@root(.*)$": "<rootDir>/src$1",
  },
  transform: {
    ".+\\.(css|less|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "jest-transform-stub",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|ts)$",
  moduleDirectories: [
    "node_modules",
    "bower_components",
    "shared",
    "src",
  ],
  setupFilesAfterEnv: ["./src/setupTests.ts"],
  modulePaths: ["node_modules", "<rootDir>/src", "/shared/vendor/modules"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$",
  ],
  collectCoverageFrom: ["**/src/**/*.{js,ts,tsx}", "!**/*.test.{js,ts,tsx}", "!**/*.stories.{js,ts,tsx}"],
};

module.exports = config;
