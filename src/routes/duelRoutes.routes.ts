import { Router } from 'express'
import { CreateDuelController } from '../controllers/duels/CreateDuelsController'

const duelRoutes = Router()

duelRoutes.post('/', CreateDuelController.handle)

export { duelRoutes }
