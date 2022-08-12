import { DuelData } from '../../dtos/DuelData.dto'
import { ICardsRepository } from '../../repositories/cards/ICardsRepository'
import { IDuelsRepository } from '../../repositories/duels/IDuelsRepository'
import { AppError } from '../../utils/AppError'
import { compareCards } from '../../utils/compareCardsFunction'

class CreateDuelsService {
  constructor(
    private duelsRepository: IDuelsRepository,
    private cardsRepository: ICardsRepository,
  ) {}

  async execute(data: DuelData) {
    const playerOneCardId = data.playerOneCardId
    const playerTwoCardId = data.playerTwoCardId

    const playerOneCard = await this.cardsRepository.findById(playerOneCardId)

    if (!playerOneCard) {
      throw new AppError('Carta do jogador um não encontrada', 404)
    }

    const playerTwoCard = await this.cardsRepository.findById(playerTwoCardId)

    if (!playerTwoCard) {
      throw new AppError('Carta do jogador dois não encontrada', 404)
    }

    const result = compareCards(playerOneCard, playerTwoCard)

    const duelResultData: DuelData = {
      winner: result.winner,
      loser: result.loser,
      playerOneCardId,
      playerTwoCardId,
    }

    if (result.winner !== -1) {
      await this.duelsRepository.create(duelResultData)
    }

    return result
  }
}

export { CreateDuelsService }
