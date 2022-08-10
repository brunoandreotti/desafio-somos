import { Router } from 'express'
import { CreateCardsController } from '../controllers/cards/CreateCardsController'
import { FindAllCardsController } from '../controllers/cards/FindAllCardsController'
import { FindCardsByIdController } from '../controllers/cards/FindCardsByIdController'
import { validationMiddleware } from '../middlewares/validationMiddleware'
import { createCardValidationRules } from '../utils/validation/createCardValidationRules'
import { idParamValidationRules } from '../utils/validation/idParamValidationRules'




const cardRoutes = Router()

cardRoutes.post('/', createCardValidationRules(), validationMiddleware, CreateCardsController.handle)
cardRoutes.get('/', FindAllCardsController.handle)
cardRoutes.get('/:id', idParamValidationRules(), validationMiddleware, FindCardsByIdController.handle)

export { cardRoutes }
