import { Card } from '@prisma/client'
import { CardsData } from '../../dtos/CardsData.dto'

export interface ICardsRepository {
  create(data: CardsData): Promise<CardsData>
  countCards(): Promise<number>
  deleteById(id: number): Promise<CardsData>
  findByName(name: string): Promise<CardsData | null>
  findById(id: number): Promise<CardsData | null>
  findAll(page: number, items: number, name: string): Promise<CardsData[]>
  updateById(id: number, data: CardsData): Promise<CardsData>
}
