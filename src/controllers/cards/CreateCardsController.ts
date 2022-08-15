import { Request, Response } from 'express'
import { CardsData } from '../../dtos/CardsData.dto'
import { CardsPrismaRepository } from '../../repositories/cards/CardsPrismaRepository'
import { CreateCardsService } from '../../services/cards/CreateCardsService'

class CreateCardsController {
  static async handle(req: Request, res: Response): Promise<Response> {
    const prismaRepository = new CardsPrismaRepository()
    const createCardsService = new CreateCardsService(prismaRepository)

    const { name, attributes }: CardsData = req.body

    const cardData: CardsData = {
      name,
      attributes,
    }

    const card = await createCardsService.execute(cardData)

    return res.status(201).json({ card })
  }
}

export { CreateCardsController }
