import { Duel } from "@prisma/client";
import { DuelData } from "../../dtos/DuelData.dto";

export interface IDuelsRepository {
  create(data: DuelData): Promise<DuelData>
}