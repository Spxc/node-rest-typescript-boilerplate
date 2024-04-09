module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest/presets/default-esm',
  transform: {
    '^.+\\.m?[tj]s?$': ['ts-jest', { useESM: true }],
  },
  // moduleNameMapper: {
  //   '^(\\.{1,2}/.*)\\.(m)?js$': '$1',
  // },
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '@config': '<rootDir>/src/config.ts',
    '@models/(.*)': '<rootDir>/src/models/$1',
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@packages/(.*)': '<rootDir>/src/packages/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(m)?ts$',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.mts',
    '!src/**/*.d.ts',
    '!src/**/*.d.mts',
  ],
};
