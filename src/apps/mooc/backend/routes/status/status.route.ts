import StatusGetController from '@apps-mooc-backend/controllers/StatusGetController'
import { container } from '@apps-mooc-backend/dependency-injection'
import { Request, Response, Router } from 'express'

const register = (router: Router): void => {
  const controller: StatusGetController = container.get('StatusGetController')
  router.get('/status', (req: Request, res: Response) => controller.run(req, res))
}

export { register }
