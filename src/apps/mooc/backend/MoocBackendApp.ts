import 'dotenv/config'
import { Server } from './server'

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
    return await this.server?.stop()
  }
}

export { MoocBackendApp }
