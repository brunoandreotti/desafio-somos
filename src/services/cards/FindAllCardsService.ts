import { CardsData } from "../../dtos/CardsData.dto";
import { ICardsRepository } from "../../repositories/cards/ICardsRepository";

class FindAllCardsService {
  constructor(private cardsRepository: ICardsRepository) {}

  async execute(): Promise<CardsData[]> {
    const cards = await this.cardsRepository.findAll()

    return cards
  }
}

export { FindAllCardsService }