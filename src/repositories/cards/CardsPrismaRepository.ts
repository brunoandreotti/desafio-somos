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

  async countCards(): Promise<number> {
    const quantityOfCards = prisma.card.count()

    return quantityOfCards
  }

  async findByName(name: string): Promise<CardsData | null> {
    const card = await prisma.card.findUnique({
      where: { name },
      include: {
        attributes: true,
      },
    })

    return card
  }

  async findById(id: number): Promise<CardsData | null> {
    const card = prisma.card.findUnique({
      where: { id },
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

  findAll(page: number, items: number, name: string): Promise<CardsData[]> {
    const cards = prisma.card.findMany({
      skip: items * (page - 1),
      take: items,
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
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

    return cards
  }

  async updateById(id: number, data: CardsData): Promise<CardsData> {
    const updatedCard = await prisma.card.update({
      where: { id },
      data: {
        name: data.name,
        attributes: {
          update: {
            ...data.attributes
          },
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

    return updatedCard
  }

  async deleteById(id: number): Promise<CardsData> {
      const deletedCard = await prisma.card.delete({
        where: { id },
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

      return deletedCard
  }
}

export { CardsPrismaRepository }
