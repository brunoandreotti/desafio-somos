import { DuelResultData } from "../../dtos/DuelData.dto";
import { IDuelsRepository } from "../../repositories/duels/IDuelsRepository";

class GetDuelResultsService {
  constructor(private duelsRepository: IDuelsRepository){}

  async execute(): Promise<DuelResultData> {
    const result = await this.duelsRepository.getResults()

    return result
  }
}

export { GetDuelResultsService }