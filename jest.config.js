module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-transform-stub',
    '\\.css$': 'jest-css-modules-transform',
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/', 'fileToExclude.js'],
  transformIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['src/*.[jt]s?(x)', '!**/*.stories.[jt]s?(x)', '!**/*.cy.[jt]s?(x)'],
  testEnvironment: 'jsdom',
};
