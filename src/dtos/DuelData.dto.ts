export interface DuelData {
  playerOneCardId: number
  playerTwoCardId: number
  winner?: number
  loser?: number
}

export interface DuelResultData {
  playerOne: number
  playerTwo: number
}