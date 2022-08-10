import { Request, Response } from "express"
import { CardsPrismaRepository } from "../../repositories/cards/CardsPrismaRepository"
import { FindCardsByIdService } from "../../services/cards/FindCardsByIdService"
import { AppError } from "../../utils/AppError"

class FindCardsByIdController {
  static async handle(req: Request, res: Response) {
    const prismaRepository = new CardsPrismaRepository()
    const findCardsByIdService = new FindCardsByIdService(prismaRepository)

    if(Object.keys(req.body).length) {
      throw new AppError('O corpo da requisição precisa ser vazio!')
    }

    const id = req.params.id

    const card = await findCardsByIdService.execute(parseInt(id))

    return res.status(200).json({ card })
  }
}

export { FindCardsByIdController }