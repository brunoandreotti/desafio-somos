import { Card } from '@prisma/client'
import { prisma } from '../../database/client'
import { CardsData } from '../../dtos/CardsData.dto'
import { ICardsRepository } from './ICardsRepository'

class CardsPrismaRepository implements ICardsRepository {
  async create({ name, attributes }: CardsData): Promise<CardsData> {
    const card = await prisma.card.create({
      data: {
        name,
        attributes: {
          create: attributes,
        },
      },
      select: {
        id: true,
        name: true,        
        attributes: {
          select: {
            id: false,
            hp: true,
            attack: true,
            defense: true,
            specialAttack: true,
            specialDefense: true,
            speed: true,
          },
        },
        attributesId: false,
      },
    })

    return card
  }

  async findByName(name: string): Promise<Card | null> {
    const card = await prisma.card.findUnique({
      where: { name },
      include: {
        attributes: true,
      },
    })

    return card
  }
}

export { CardsPrismaRepository }
