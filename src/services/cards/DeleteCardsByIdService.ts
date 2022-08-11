import { CardsData } from '../../dtos/CardsData.dto'
import { ICardsRepository } from '../../repositories/cards/ICardsRepository'
import { AppError } from '../../utils/AppError'

class DeleteCardsByIdService {
  constructor(private cardsRepository: ICardsRepository) {}

  async execute(id: number): Promise<CardsData> {
    const card = await this.cardsRepository.findById(id)

    if (!card) {
      throw new AppError('Carta não encontrada!', 404)
    }

    const deletedCard = await this.cardsRepository.deleteById(id)

    return deletedCard
  }
}

export { DeleteCardsByIdService }
