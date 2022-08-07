import { CardsData } from '../../dtos/CardsData.dto'
import { ICardsRepository } from '../../repositories/cards/ICardsRepository'
import { AppError } from '../../utils/AppError'

class CreateCardService {
  constructor(private cardRepository: ICardsRepository) {}

  async execute({ name, attributes }: CardsData) {
    if(!name || !attributes) {
      throw new AppError('Todos os campos são necessários')
    }

    const cardAlreadyExists = await this.cardRepository.findByName(name)

    if(cardAlreadyExists) {
      throw new AppError('Carta já existente!')
    }

    const cardData: CardsData = {
      name,
      attributes
    }

    const card = await this.cardRepository.create(cardData)

    return card
  }
}

export { CreateCardService }
