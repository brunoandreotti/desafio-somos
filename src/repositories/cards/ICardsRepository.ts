import { Card } from "@prisma/client";
import { CardsData } from "../../dtos/CardsData.dto";

export interface ICardsRepository {
  create(data: CardsData): Promise<Card>
  findByName(name: string): Promise<Card | null>
}

