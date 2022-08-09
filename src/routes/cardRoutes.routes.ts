import { Router } from 'express'
import { CreateCardsController } from '../controllers/cards/CreateCardsController'
import { FindCardsByIdController } from '../controllers/cards/FindCardsByIdController'
import { validationMiddleware } from '../middlewares/validationMiddleware'
import { createCardValidationRules } from '../utils/validation/createCardValidationRules'



const cardRoutes = Router()

cardRoutes.post('/', createCardValidationRules(), validationMiddleware, CreateCardsController.handle)
cardRoutes.get('/:id', FindCardsByIdController.handle)

export { cardRoutes }
