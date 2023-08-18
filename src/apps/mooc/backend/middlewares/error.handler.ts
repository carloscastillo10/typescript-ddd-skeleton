/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'

const { log } = console

const logErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction): void => {
  const errorTitle = `Error in <${req.method}> <${req.url}> from the client <${req.headers['user-agent'] ?? ''}>: <${error.message}>`
  log(errorTitle)
  next(error)
}

const contextsErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction): void => {
  if (error.name === 'InvalidArgumentError') {
    res.status(httpStatus.UNPROCESSABLE_ENTITY).send({ message: error.message })
  }
  next(error)
}

const boomErrorHandler = (error: Error | any, req: Request, res: Response, next: NextFunction): void => {
  if (error.isBoom === true) {
    console.log('es error de boom')
    const { output } = error
    res.status(output.statusCode).send(output.payload)
  }
  next(error)
}

const databaseErrorHandler = (error: Error | any, req: Request, res: Response, next: NextFunction): void => {
  if (error.name === 'MongoServerError') {
    const errorMessage: string = error.message
    if (errorMessage.toLowerCase().includes('duplicate key')) {
      res.status(httpStatus.CONFLICT).send({ message: 'User already exists' })
    }

    const payload = {
      name: error.stack?.split(':')[1],
      value: error.keyValue,
    }
    res.status(httpStatus.UNPROCESSABLE_ENTITY).send(payload)
  }
  next(error)
}

const serverErrorHandler = (_error: Error, req: Request, res: Response, next: NextFunction): void => {
  res.status(httpStatus.INTERNAL_SERVER_ERROR).send()
  next()
}

export { boomErrorHandler, contextsErrorHandler, databaseErrorHandler, logErrorHandler, serverErrorHandler }
