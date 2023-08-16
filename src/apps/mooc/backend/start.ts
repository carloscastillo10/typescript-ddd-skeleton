import { MoocBackendApp } from '@apps-mooc-backend/MoocBackendApp'

new MoocBackendApp().start().catch(error => {
  console.log('Error starting backend app', error)
  process.exit(1)
})

process.on('uncaughtException', error => {
  console.log('UncaughtException', error)
  process.exit(1)
})
