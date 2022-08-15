import { CardsData } from '../../dtos/CardsData.dto'
import { ICardsRepository } from '../../repositories/cards/ICardsRepository'
import { AppError } from '../../utils/AppError'

class CreateCardsService {
  constructor(private cardsRepository: ICardsRepository) {}

  async execute({ name, attributes }: CardsData) {
    if (!name || !attributes) {
      throw new AppError('Todos os campos são necessários')
    }

    if (
      !attributes.attack ||
      !attributes.defense ||
      !attributes.hp ||
      !attributes.specialAttack ||
      !attributes.specialDefense ||
      !attributes.speed
    ) {
      throw new AppError('Todos os atributos são necessários')
    }

    const cardAlreadyExists = await this.cardsRepository.findByName(name)

    if (cardAlreadyExists) {
      throw new AppError('Carta já existente!')
    }

    const cardData: CardsData = {
      name,
      attributes,
    }

    const card = await this.cardsRepository.create(cardData)

    return card
  }
}

export { CreateCardsService }
