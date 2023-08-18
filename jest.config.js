module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  cacheDirectory: '.tmp/jestCache',
  moduleNameMapper: {
    '^@apps-mooc-backend/(.*)$': '<rootDir>/src/apps/mooc/backend/$1',
    '^@contexts-mooc-shared/(.*)$': '<rootDir>/src/contexts/mooc/shared/$1',
    '^@contexts-mooc-users/(.*)$': '<rootDir>/src/contexts/mooc/users/$1',
    '^@contexts-shared-infraestructure/(.*)$': '<rootDir>/src/contexts/shared/infraestructure/$1',
    '^@contexts-shared-domain/(.*)$': '<rootDir>/src/contexts/shared/domain/$1',
    '^@test-contexts-mooc/(.*)$': '<rootDir>/tests/contexts/mooc/$1',
    '^@test-contexts-shared/(.*)$': '<rootDir>/tests/contexts/shared/$1',
  },
}
