import { Router } from 'express'

import User from './app/models/User'

import UserController from './app/controllers/UserController'

const routes = Router()

routes.post('/user', UserController.store)

routes.post('/sessions', (req, res) => {
  return res.json({ ok: true })
})

export default routes
