import { MoocBackendApp } from '@apps-mooc-backend/MoocBackendApp'

const { log } = console
new MoocBackendApp().start().catch(error => {
  log('Error starting backend app', error)
  process.exit(1)
})

process.on('uncaughtException', error => {
  log('UncaughtException', error)
  process.exit(1)
})
