module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  cacheDirectory: '.tmp/jestCache',
  moduleNameMapper: { '^@contexts-shared-infraestructure/(.*)$': '<rootDir>/src/contexts/shared/infraestructure/$1' },
}
