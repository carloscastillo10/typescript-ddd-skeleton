import { Controller } from '@apps-mooc-backend/controllers/Controller'
import { CreateUserRequest } from '@contexts-mooc-users/application/CreateUserRequest'
import { UserCreator } from '@contexts-mooc-users/application/UserCreator'
import { Request, Response } from 'express'
import httpStatus from 'http-status'

interface UserPostRequest extends Request {
  body: CreateUserRequest
}

class UserPostController implements Controller {
  private readonly userCreator: UserCreator

  constructor(userCreator: UserCreator) {
    this.userCreator = userCreator
  }

  async run(req: UserPostRequest, res: Response): Promise<void> {
    const data: CreateUserRequest = req.body
    await this.userCreator.run(data)
    res.status(httpStatus.CREATED).send()
  }
}

export default UserPostController
