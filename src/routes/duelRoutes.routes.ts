import { Router } from 'express'
import { CreateDuelController } from '../controllers/duels/CreateDuelsController'
import { GetDuelResultsController } from '../controllers/duels/GetDuelResultsController'
import { validationMiddleware } from '../middlewares/validationMiddleware'
import { duelBodyValidationRule } from '../utils/validation/duelBodyValidationRules'

const duelRoutes = Router()

duelRoutes.post('/', duelBodyValidationRule(), validationMiddleware, CreateDuelController.handle)

duelRoutes.get('/', GetDuelResultsController.handle)

export { duelRoutes }
