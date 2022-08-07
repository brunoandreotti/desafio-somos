-- CreateTable
CREATE TABLE "attributes" (
    "id" SERIAL NOT NULL,
    "hp" INTEGER NOT NULL,
    "attack" INTEGER NOT NULL,
    "defense" INTEGER NOT NULL,
    "specialAttack" INTEGER NOT NULL,
    "specialDefense" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,

    CONSTRAINT "attributes_pkey" PRIMARY KEY ("id")
);
