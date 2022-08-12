import { Request, Response } from 'express'
import { DuelData } from '../../dtos/DuelData.dto'
import { CardsPrismaRepository } from '../../repositories/cards/CardsPrismaRepository'
import { DuelsPrismaRepository } from '../../repositories/duels/DuelsPrismaRepository'
import { CreateDuelsService } from '../../services/duels/CreateDuelsService'

class CreateDuelController {
  static async handle(req: Request, res: Response): Promise<Response> {
    const cardsPrismaRepository = new CardsPrismaRepository()
    const duelsPrismaRepository = new DuelsPrismaRepository()
    const createDuelsService = new CreateDuelsService(
      duelsPrismaRepository,
      cardsPrismaRepository,
    )

    const { playerOneCard, playerTwoCard } = req.body

    const duelData: DuelData = {
      playerOneCardId: playerOneCard,
      playerTwoCardId: playerTwoCard,
    }

    const duel = await createDuelsService.execute(duelData)

    if (duel.winner === -1 || duel.loser === -1) {
      return res.status(200).json({result: 'draw'})
    }

    return res.status(201).json(duel)
  }
}

export { CreateDuelController }
