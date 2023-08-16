import { registerRoutes } from '@apps-mooc-backend/routes'
import compress from 'compression'
import errorHandler from 'errorhandler'
import express, { Express, NextFunction, Request, Response } from 'express'
import Router from 'express-promise-router'
import helmet from 'helmet'
import * as http from 'http'
import httpStatus from 'http-status'

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

    router.use((error: Error, req: Request, res: Response, next: NextFunction) => {
      console.log(error)
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send()
      next()
    })
  }

  async listen(): Promise<void> {
    await new Promise<void>(resolve => {
      const env = this.express.get('env') as string
      this.httpServer = this.express.listen(this.port, () => {
        console.log(`  Mock Backend App is running at http://localhost:${this.port} in ${env} mode`)
        console.log('  Press CTRL-C to stop\n')
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
