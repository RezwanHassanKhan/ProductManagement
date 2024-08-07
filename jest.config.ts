// jest.config.ts

import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',                 // Use ts-jest for TypeScript support
  testEnvironment: 'node',           // Set the test environment to Node.js
  moduleFileExtensions: ['ts', 'js'],// Recognize TypeScript and JavaScript files
  testMatch: ['**/test/**/*.test.ts'], // Match test files within the 'tests' folder
  collectCoverage: true,             // Collect test coverage information
  coverageDirectory: 'coverage',     // Output coverage reports to the 'coverage' directory
  coverageProvider: 'v8',            // Use V8 for coverage, better performance
  moduleNameMapper: {                // Handle module path mappings
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {                       // Use ts-jest to transpile test files
    '^.+\\.ts$': 'ts-jest'
  },
  globals: {                         // Global settings for ts-jest
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json'
    }
  }
};

export default config;