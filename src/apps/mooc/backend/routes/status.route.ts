import StatusGetController from '@apps-mooc-backend/controllers/StatusGetController'
import { Request, Response, Router } from 'express'
import { container } from '../dependency-injection'

const register = (router: Router): void => {
  const controller: StatusGetController = container.get('StatusGetController')
  router.get('/status', (req: Request, res: Response) => controller.run(req, res))
}

export { register }
