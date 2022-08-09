import { Router } from 'express'
import { CreateCardsController } from '../controllers/cards/CreateCardsController'
import { validationMiddleware } from '../middlewares/ValidationMiddleware'
import { cardValidationRules } from '../utils/validation/createCardValidationRules'



const cardRoutes = Router()

cardRoutes.post('/', cardValidationRules(), validationMiddleware, CreateCardsController.handle)

export { cardRoutes }
