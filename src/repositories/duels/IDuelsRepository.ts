import { DuelData, DuelResultData } from '../../dtos/DuelData.dto'

export interface IDuelsRepository {
  create(data: DuelData): Promise<DuelData>
  getResults(): Promise<DuelResultData>
}
