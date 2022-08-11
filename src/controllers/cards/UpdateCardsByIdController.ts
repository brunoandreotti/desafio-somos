import { Request, Response } from 'express'
import { CardsData } from '../../dtos/CardsData.dto'
import { CardsPrismaRepository } from '../../repositories/cards/CardsPrismaRepository'
import { FindCardsByIdService } from '../../services/cards/FindCardsByIdService'
import { UpdateCardsByIdService } from '../../services/cards/UpdateCardsByIdService'

class UpdateCardsByIdController {
  static async handle(req: Request, res: Response): Promise<Response> {
    const prismaRepository = new CardsPrismaRepository()
    const updateCardsByIdService = new UpdateCardsByIdService(prismaRepository)

    const id = req.params.id

    const { name, attributes } = req.body

    const cardData: CardsData = {
      name,
      attributes,
    }

    const card = await updateCardsByIdService.execute(parseInt(id), cardData)

    return res.status(200).json({ card })
  }
}

export { UpdateCardsByIdController }
