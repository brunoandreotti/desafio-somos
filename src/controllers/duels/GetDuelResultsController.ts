import { Request, Response } from 'express'
import { DuelsPrismaRepository } from '../../repositories/duels/DuelsPrismaRepository'
import { GetDuelResultsService } from '../../services/duels/GetDuelResultsService'

class GetDuelResultsController {
  static async handle(req: Request, res: Response) {
    const duelsRepository = new DuelsPrismaRepository()
    const getDuelResultsService = new GetDuelResultsService(duelsRepository)

    const result = await getDuelResultsService.execute()

    return res
      .status(200)
      .json({ playerOne: result.playerOne, playerTwo: result.playerTwo })
  }
}
