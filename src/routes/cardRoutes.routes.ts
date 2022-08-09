import { Router } from 'express'
import { CreateCardsController } from '../controllers/cards/CreateCardsController'
import { validationMiddleware } from '../middlewares/ValidationMiddleware'
import { cardValidationRules } from '../utils/validation/cardValidationRules'



const cardRoutes = Router()

cardRoutes.post('/', cardValidationRules(), validationMiddleware, CreateCardsController.handle)

export { cardRoutes }
