import { Router } from 'express'
import { globSync } from 'glob'

const register = (routePath: string, router: Router): void => {
  const route = require(routePath)
  route.register(router)
}

const registerRoutes = (router: Router): void => {
  const routes: string[] = globSync(`${__dirname}/**/*.route.*`)
  routes.map(routePath => register(routePath, router))
}

export { registerRoutes }
