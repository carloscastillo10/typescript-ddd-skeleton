const loadDBUrl = (): string => {
  switch (process.env.NODE_ENV) {
    case 'test':
      return process.env.DATABASE_TEST_URL ?? 'mongodb://localhost:27017/mooc-backend-test'

    case 'production':
      return process.env.DATABASE_URL ?? 'mongodb://localhost:27017/mooc-backend-production'

    default:
      return process.env.DATABASE_DEV_ULR ?? 'mongodb://localhost:27017/mooc-backend-dev'
  }
}

const moocConfig = {
  env: process.env.NODE_ENV ?? 'dev',
  port: process.env.PORT ?? '5000',
  mongodb: {
    url: loadDBUrl(),
  },
}

export { moocConfig }
