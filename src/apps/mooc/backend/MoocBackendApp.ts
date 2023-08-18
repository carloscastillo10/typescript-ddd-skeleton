import { Server } from '@apps-mooc-backend/server'
import { moocConfig } from '@contexts-mooc-shared/infraestructure/config'

class MoocBackendApp {
  server?: Server

  async start(): Promise<void> {
    const port = moocConfig.port
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
