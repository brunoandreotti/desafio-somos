import { CardsData } from "../../dtos/CardsData.dto";
import { ICardsRepository } from "../../repositories/cards/ICardsRepository";

class FindAllCardsService {
  constructor(private cardsRepository: ICardsRepository) {}

  async execute(page: number, items: number, name: string): Promise<CardsData[]> {
    const cards = await this.cardsRepository.findAll(page, items, name)

    return cards
  }
}

export { FindAllCardsService }