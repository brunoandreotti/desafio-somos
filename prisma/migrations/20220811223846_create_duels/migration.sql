-- CreateTable
CREATE TABLE "duels" (
    "id" SERIAL NOT NULL,
    "playerOneCardId" INTEGER NOT NULL,
    "playerTwoCardId" INTEGER NOT NULL,
    "winner" TEXT NOT NULL,
    "loser" TEXT NOT NULL,

    CONSTRAINT "duels_pkey" PRIMARY KEY ("id")
);
