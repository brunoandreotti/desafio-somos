import { Attributes } from '@prisma/client'
import { CardsData } from '../../dtos/CardsData.dto'
import { DuelData } from '../../dtos/DuelData.dto'
import { ICardsRepository } from '../../repositories/cards/ICardsRepository'
import { IDuelsRepository } from '../../repositories/duels/IDuelsRepository'
import { AppError } from '../../utils/AppError'

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

    const compareCards = (
      playerOneCard: CardsData,
      playerTwoCard: CardsData,
    ) => {
      const result = {
        winner: -1,
        loser: -1,
        details: {
          hp: -1,
          attack: -1,
          defense: -1,
          specialAttack: -1,
          specialDefense: -1,
          speed: -1,
        },
      }

      let playerOneWins = 0
      let playerTwoWins = 0

      const playerOneCardAttributes: Attributes =
        Object.values(playerOneCard)[2]
      const playerTwoCardAttributes: Attributes =
        Object.values(playerTwoCard)[2]

      if (playerOneCardAttributes.hp > playerTwoCardAttributes.hp) {
        result.details.hp = playerOneCardId
        playerOneWins++
      } else if (playerOneCardAttributes.hp < playerTwoCardAttributes.hp) {
        result.details.hp = playerTwoCardId
        playerTwoWins++
      }

      if (playerOneCardAttributes.attack > playerTwoCardAttributes.attack) {
        result.details.attack = playerOneCardId
        playerOneWins++
      } else if (
        playerOneCardAttributes.attack < playerTwoCardAttributes.attack
      ) {
        result.details.attack = playerTwoCardId
        playerTwoWins++
      }

      if (playerOneCardAttributes.defense > playerTwoCardAttributes.defense) {
        result.details.defense = playerOneCardId
        playerOneWins++
      } else if (
        playerOneCardAttributes.defense < playerTwoCardAttributes.defense
      ) {
        result.details.defense = playerTwoCardId
        playerTwoWins++
      }

      if (
        playerOneCardAttributes.specialAttack >
        playerTwoCardAttributes.specialAttack
      ) {
        result.details.specialAttack = playerOneCardId
        playerOneWins++
      } else if (
        playerOneCardAttributes.specialAttack <
        playerTwoCardAttributes.specialAttack
      ) {
        result.details.specialAttack = playerTwoCardId
        playerTwoWins++
      }

      if (
        playerOneCardAttributes.specialDefense >
        playerTwoCardAttributes.specialDefense
      ) {
        result.details.specialDefense = playerOneCardId
        playerOneWins++
      } else if (
        playerOneCardAttributes.specialDefense <
        playerTwoCardAttributes.specialDefense
      ) {
        result.details.specialDefense = playerTwoCardId
        playerTwoWins++
      }

      if (playerOneCardAttributes.defense > playerTwoCardAttributes.defense) {
        result.details.defense = playerOneCardId
        playerOneWins++
      } else if (
        playerOneCardAttributes.defense < playerTwoCardAttributes.defense
      ) {
        result.details.defense = playerTwoCardId
        playerTwoWins++
      }

      if (playerOneWins > playerTwoWins) {
        result.winner = playerOneCardId
        result.loser = playerTwoCardId
      } else if (playerOneWins < playerTwoWins) {
        result.winner = playerTwoCardId
        result.loser = playerOneCardId
      } else {
        result.winner = -1
        result.loser = -1
      }

      return result
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
