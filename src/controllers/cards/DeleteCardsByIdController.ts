import { Request, Response } from 'express'
import { CardsPrismaRepository } from '../../repositories/cards/CardsPrismaRepository'
import { DeleteCardsByIdService } from '../../services/cards/DeleteCardsByIdService'

class DeleteCardsByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const prismaRepository = new CardsPrismaRepository()
    const deleteCardsByIdService = new DeleteCardsByIdService(prismaRepository)

    const id = req.params.id

    const deletedCard = await deleteCardsByIdService.execute(parseInt(id))

    return res.status(200).json({ deletedCard })
  }
}

export { DeleteCardsByIdController }
