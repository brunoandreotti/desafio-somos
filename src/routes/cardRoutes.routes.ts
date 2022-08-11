import { Router } from 'express'
import { CreateCardsController } from '../controllers/cards/CreateCardsController'
import { DeleteCardsByIdController } from '../controllers/cards/DeleteCardsByIdController'
import { FindAllCardsController } from '../controllers/cards/FindAllCardsController'
import { FindCardsByIdController } from '../controllers/cards/FindCardsByIdController'
import { UpdateCardsByIdController } from '../controllers/cards/UpdateCardsByIdController'
import { validationMiddleware } from '../middlewares/validationMiddleware'
import { createCardValidationRules } from '../utils/validation/createCardValidationRules'
import { idParamValidationRules } from '../utils/validation/idParamValidationRules'
import { pageAndItemParamsValidationRule } from '../utils/validation/pageItemAndNameParamsValidationRule'
import { updateCardBodyValidationRule } from '../utils/validation/updateCardBodyValidationRules'

const cardRoutes = Router()

cardRoutes.post(
  '/',
  createCardValidationRules(),
  validationMiddleware,
  CreateCardsController.handle,
)
cardRoutes.get(
  '/',
  pageAndItemParamsValidationRule(),
  validationMiddleware,
  FindAllCardsController.handle,
)

cardRoutes.get(
  '/:id',
  idParamValidationRules(),
  validationMiddleware,
  FindCardsByIdController.handle,
)

cardRoutes.patch(
  '/:id',
  idParamValidationRules(),
  updateCardBodyValidationRule(),
  validationMiddleware,
  UpdateCardsByIdController.handle,
)

cardRoutes.delete('/:id', idParamValidationRules(), validationMiddleware, DeleteCardsByIdController.handle)

export { cardRoutes }
