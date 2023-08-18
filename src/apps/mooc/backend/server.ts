import { boomErrorHandler, contextsErrorHandler, databaseErrorHandler, logErrorHandler, serverErrorHandler } from '@apps-mooc-backend/middlewares/error.handler'
import { registerRoutes } from '@apps-mooc-backend/routes'
import compress from 'compression'
import errorHandler from 'errorhandler'
import express, { Express } from 'express'
import Router from 'express-promise-router'
import helmet from 'helmet'
import * as http from 'http'

const { log } = console

class Server {
  private readonly express: Express
  private readonly port: string
  private httpServer?: http.Server

  constructor(port: string) {
    this.port = port
    this.express = express()
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
    this.express.use(helmet.xssFilter())
    this.express.use(helmet.noSniff())
    this.express.use(helmet.hidePoweredBy())
    this.express.use(helmet.frameguard({ action: 'deny' }))
    this.express.use(compress())

    const router = Router()
    router.use(errorHandler())

    this.express.use('/api/v1', router)
    registerRoutes(router)

    this.express.use(logErrorHandler)
    this.express.use(contextsErrorHandler)
    this.express.use(boomErrorHandler)
    this.express.use(databaseErrorHandler)
    this.express.use(serverErrorHandler)
  }

  async listen(): Promise<void> {
    await new Promise<void>(resolve => {
      const env = this.express.get('env') as string
      this.httpServer = this.express.listen(this.port, () => {
        log(`  Mock Backend App is running at http://localhost:${this.port} in ${env} mode`)
        log('  Press CTRL-C to stop')
        resolve()
      })
    })
  }

  getHTTPServer(): Server['httpServer'] {
    return this.httpServer
  }

  async stop(): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      if (this.httpServer != null) {
        this.httpServer.close(error => {
          if (error != null) {
            reject(error)
            return
          }
          resolve()
        })
      }
      resolve()
    })
  }
}

export { Server }
