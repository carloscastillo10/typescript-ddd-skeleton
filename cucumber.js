const common = ['--require-module ts-node/register', '--require-module tsconfig-paths/register']
const mooc_backend = [...common, 'tests/apps/mooc/backend/features/**/*.feature', '--require tests/apps/mooc/backend/features/step_definitions/*.steps.ts'].join(' ')

module.exports = {
  mooc_backend,
}
