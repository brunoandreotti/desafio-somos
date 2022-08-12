import { prisma } from '../../database/client'
import { DuelData, DuelResultData } from '../../dtos/DuelData.dto'
import { IDuelsRepository } from './IDuelsRepository'

class DuelsPrismaRepository implements IDuelsRepository {
  async create(data: DuelData): Promise<DuelData> {
    const duel = await prisma.duel.create({
      data: {
        playerOneCardId: data.playerOneCardId,
        playerTwoCardId: data.playerTwoCardId,
        winner: data.winner as number,
        loser: data.loser as number,
      },
    })

    return duel
  }

  async getResults(): Promise<DuelResultData> {
      const playerOneWinCounts = await prisma.$queryRaw`SELECT COUNT(winner) FROM duels WHERE playerOneCardId = winner`

      const playerTwoWinCounts = await prisma.$queryRaw`SELECT COUNT(winner) FROM duels WHERE playerTwoCardId = winner`

      const resultData: DuelResultData = {
        playerOne: playerOneWinCounts as number,
        playerTwo: playerTwoWinCounts as number
      }

      return resultData
  }
}

export { DuelsPrismaRepository }
