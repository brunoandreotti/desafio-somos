import { prisma } from '../../database/client'
import { DuelData } from '../../dtos/DuelData.dto'
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
}

export { DuelsPrismaRepository }
