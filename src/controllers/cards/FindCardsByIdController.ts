import { Request, Response } from "express"
import { CardsPrismaRepository } from "../../repositories/cards/CardsPrismaRepository"
import { FindCardsByIdService } from "../../services/cards/FindCardsByIdService"

class FindCardsByIdController {
  static async handle(req: Request, res: Response) {
    const prismaRepository = new CardsPrismaRepository()
    const findCardsByIdService = new FindCardsByIdService(prismaRepository)

    const id = req.params.id

    const card = await findCardsByIdService.execute(parseInt(id))

    return res.status(200).json({ card })
  }
}

export { FindCardsByIdController }