import { CardsData } from '../../dtos/CardsData.dto'

export interface ICardsRepository {
  create(data: CardsData): Promise<CardsData>
  findByName(name: string): Promise<CardsData | null>
  findById(id: number): Promise<CardsData | null>
  findAll(page: number, items: number): Promise<CardsData[]>
  countCards(): Promise<number>
}
