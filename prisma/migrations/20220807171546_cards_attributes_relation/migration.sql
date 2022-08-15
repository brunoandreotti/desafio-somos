/*
  Warnings:

  - A unique constraint covering the columns `[attributesId]` on the table `cards` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `attributesId` to the `cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cards" ADD COLUMN     "attributesId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "cards_attributesId_key" ON "cards"("attributesId");

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_attributesId_fkey" FOREIGN KEY ("attributesId") REFERENCES "attributes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
