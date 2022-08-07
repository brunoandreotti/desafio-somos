import { Router } from 'express'
import { CreateCardsController } from '../controllers/cards/CreateCardsController'

const cardRoutes = Router()

cardRoutes.post('/create', CreateCardsController.handle)

export { cardRoutes }
