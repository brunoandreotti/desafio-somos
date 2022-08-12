-- DropForeignKey
ALTER TABLE "cards" DROP CONSTRAINT "cards_attributesId_fkey";

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_attributesId_fkey" FOREIGN KEY ("attributesId") REFERENCES "attributes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
