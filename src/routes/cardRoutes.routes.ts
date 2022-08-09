import { Router } from 'express'
import { CreateCardsController } from '../controllers/cards/CreateCardsController'
import { FindCardsByIdController } from '../controllers/cards/FindCardsByIdController'
import { validationMiddleware } from '../middlewares/validationMiddleware'
import { cardValidationRules } from '../utils/validation/createCardValidationRules'



const cardRoutes = Router()

cardRoutes.post('/', cardValidationRules(), validationMiddleware, CreateCardsController.handle)
cardRoutes.get('/:id', FindCardsByIdController.handle)

export { cardRoutes }
