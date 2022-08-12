/*
  Warnings:

  - Changed the type of `winner` on the `duels` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `loser` on the `duels` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "duels" DROP COLUMN "winner",
ADD COLUMN     "winner" INTEGER NOT NULL,
DROP COLUMN "loser",
ADD COLUMN     "loser" INTEGER NOT NULL;
