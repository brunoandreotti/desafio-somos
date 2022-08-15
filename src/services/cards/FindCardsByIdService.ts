import { CardsData } from '../../dtos/CardsData.dto'
import { ICardsRepository } from '../../repositories/cards/ICardsRepository'
import { AppError } from '../../utils/AppError'

class FindCardsByIdService {
  constructor(private cardsRepository: ICardsRepository) {}

  async execute(id: number): Promise<CardsData | null> {
    if (!id) {
      throw new AppError('O campo ID é necessário')
    }

    const card = await this.cardsRepository.findById(id)

    

    if (!card) {
      throw new AppError('Carta não encontrada!', 404)
    }

    return card
  }
}

export { FindCardsByIdService }
