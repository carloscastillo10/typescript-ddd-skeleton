import { Server } from '@apps-mooc-backend/server'
import 'dotenv/config'

class MoocBackendApp {
  server?: Server

  async start(): Promise<void> {
    const port = process.env.PORT ?? '5000'
    this.server = new Server(port)

    await this.server.listen()
  }

  get httpServer(): Server['httpServer'] | undefined {
    return this.server?.getHTTPServer()
  }

  async stop(): Promise<void> {
    await this.server?.stop()
  }
}

export { MoocBackendApp }
