import { Attributes } from "@prisma/client"
import { CardsData } from "../dtos/CardsData.dto"

export const compareCards = (
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
    result.details.hp = playerOneCard.id as number
    playerOneWins++
  } else if (playerOneCardAttributes.hp < playerTwoCardAttributes.hp) {
    result.details.hp = playerTwoCard.id as number
    playerTwoWins++
  }

  if (playerOneCardAttributes.attack > playerTwoCardAttributes.attack) {
    result.details.attack = playerOneCard.id as number
    playerOneWins++
  } else if (
    playerOneCardAttributes.attack < playerTwoCardAttributes.attack
  ) {
    result.details.attack = playerTwoCard.id as number
    playerTwoWins++
  }

  if (playerOneCardAttributes.defense > playerTwoCardAttributes.defense) {
    result.details.defense = playerOneCard.id as number
    playerOneWins++
  } else if (
    playerOneCardAttributes.defense < playerTwoCardAttributes.defense
  ) {
    result.details.defense = playerTwoCard.id as number
    playerTwoWins++
  }

  if (
    playerOneCardAttributes.specialAttack >
    playerTwoCardAttributes.specialAttack
  ) {
    result.details.specialAttack = playerOneCard.id as number
    playerOneWins++
  } else if (
    playerOneCardAttributes.specialAttack <
    playerTwoCardAttributes.specialAttack
  ) {
    result.details.specialAttack = playerTwoCard.id as number
    playerTwoWins++
  }

  if (
    playerOneCardAttributes.specialDefense >
    playerTwoCardAttributes.specialDefense
  ) {
    result.details.specialDefense = playerOneCard.id as number
    playerOneWins++
  } else if (
    playerOneCardAttributes.specialDefense <
    playerTwoCardAttributes.specialDefense
  ) {
    result.details.specialDefense = playerTwoCard.id as number
    playerTwoWins++
  }

  if (playerOneCardAttributes.speed > playerTwoCardAttributes.speed) {
    result.details.speed = playerOneCard.id as number
    playerOneWins++
  } else if (
    playerOneCardAttributes.speed < playerTwoCardAttributes.speed
  ) {
    result.details.speed = playerTwoCard.id as number
    playerTwoWins++
  }

  if (playerOneWins > playerTwoWins) {
    result.winner = playerOneCard.id as number
    result.loser = playerTwoCard.id as number
  } else if (playerOneWins < playerTwoWins) {
    result.winner = playerTwoCard.id as number
    result.loser = playerOneCard.id as number
  } else {
    result.winner = -1
    result.loser = -1
  }

  return result
}