import { Card } from "@prisma/client";
import { CardsData } from "../../dtos/CardsData.dto";

export interface ICardsReposotory {
  create(data: CardsData): Promise<Card>
}

