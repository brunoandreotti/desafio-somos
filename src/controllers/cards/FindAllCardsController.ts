import { Request, Response } from 'express'
import { CardsPrismaRepository } from '../../repositories/cards/CardsPrismaRepository'
import { CountCardsService } from '../../services/cards/CountCardsService'
import { FindAllCardsService } from '../../services/cards/FindAllCardsService'
import { AppError } from '../../utils/AppError'

class FindAllCardsController {
  static async handle(req: Request, res: Response) {
    const prismaRepository = new CardsPrismaRepository()
    const findAllCardsService = new FindAllCardsService(prismaRepository)
    const countCardsService = new CountCardsService(prismaRepository)

    const page = req.query['page']
    const items = req.query['items']

    if (Object.keys(req.body).length) {
      throw new AppError('O corpo da requisição precisa ser vazio!')
    }

    const quantityOfCards = await countCardsService.execute()

    const parsedPage = page ? parseInt(page as string) : 1
    const parsedItems = items ? parseInt(items as string) : quantityOfCards

    const numberOfPages = quantityOfCards / parsedItems

    const cards = await findAllCardsService.execute(parsedPage, parsedItems)

    return res
      .status(200)
      .json({ numberOfPages: Math.ceil(numberOfPages), quantityOfCards, page: parsedPage, cards })
  }
}

export { FindAllCardsController }
