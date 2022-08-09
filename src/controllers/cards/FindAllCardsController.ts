import { Request, Response } from 'express'
import { CardsPrismaRepository } from '../../repositories/cards/CardsPrismaRepository'
import { FindAllCardsService } from '../../services/cards/FindAllCardsService'

class FindAllCardsController {
  static async handle(req: Request, res: Response) {
    const prismaRepository = new CardsPrismaRepository()
    const findAllCardsService = new FindAllCardsService(prismaRepository)

    const cards = await findAllCardsService.execute()

    return res.status(200).json({ cards })
  }
}

export { FindAllCardsController }
