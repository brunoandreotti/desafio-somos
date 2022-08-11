import { CardsData } from "../../dtos/CardsData.dto";
import { ICardsRepository } from "../../repositories/cards/ICardsRepository";
import { AppError } from "../../utils/AppError";

class UpdateCardsByIdService {
  constructor(private cardsRepository: ICardsRepository) {}
  async execute(id: number, data: CardsData): Promise<CardsData> {

    const card = await this.cardsRepository.findById(id)

    if (!card) {
      throw new AppError('Carta não encontrada!')
    }

    const updatedCard = await this.cardsRepository.updateById(id, data)

    return updatedCard
  }
}

export { UpdateCardsByIdService }