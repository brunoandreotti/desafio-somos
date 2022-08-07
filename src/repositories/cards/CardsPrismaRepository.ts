import { Card } from '@prisma/client'
import { prisma } from '../../database/client'
import { CardsData } from '../../dtos/CardsData.dto'
import { ICardsRepository } from './ICardsRepository'

class CardsPrismaRepository implements ICardsRepository {
  async create({ name, attributes }: CardsData): Promise<Card> {
    const card = await prisma.card.create({
      data: { name, attribute: { create: attributes } },
    })

    return card
  }

  async findByName(name: string): Promise<Card | null> {
    const card = await prisma.card.findUnique({
      where: { name },
      include: {
        attribute: true,
      },
    })

    return card
  }
}

export { CardsPrismaRepository }
