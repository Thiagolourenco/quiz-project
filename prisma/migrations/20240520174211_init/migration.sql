-- CreateTable
CREATE TABLE "TypeQuestions" (
    "id" SERIAL NOT NULL,
    "level" INTEGER NOT NULL,
    "life" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "dificult" INTEGER NOT NULL,
    "type_question" TEXT,

    CONSTRAINT "TypeQuestions_pkey" PRIMARY KEY ("id")
);
