/* eslint-disable @typescript-eslint/no-misused-promises */
import UserPostController from '@apps-mooc-backend/controllers/UserPostController'
import { container } from '@apps-mooc-backend/dependency-injection'
import { NextFunction, Request, Response, Router } from 'express'

const register = (router: Router): void => {
  const controller: UserPostController = container.get('UserPostController')
  router.post('/users', async (req: Request, res: Response, next: NextFunction) => await controller.run(req, res, next))
}

export { register }
