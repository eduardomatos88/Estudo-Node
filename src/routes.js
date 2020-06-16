import { Router } from 'express'

import User from './app/models/User'

const routes = Router()

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Luiz Eduardo',
    email: 'luizmatosedu@gmail.com',
    passowrd_hash: '12345',
  })

  return res.json(user)
})

export default routes
