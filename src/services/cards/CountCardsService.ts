import { ICardsRepository } from "../../repositories/cards/ICardsRepository"

class CountCardsService {
  constructor(private cardsRepository: ICardsRepository) {}

  async execute(): Promise<number> {
    const quantityOfCards = await this.cardsRepository.countCards()

    return quantityOfCards
  }
}

export { CountCardsService }