-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT,
    "profile_img" TEXT,
    "points" INTEGER,
    "level" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeQuestions" (
    "id" SERIAL NOT NULL,
    "level" INTEGER NOT NULL,
    "life" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "type_question" TEXT,

    CONSTRAINT "TypeQuestions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Questions" (
    "id" SERIAL NOT NULL,
    "typeQuestionsID" INTEGER NOT NULL,
    "name" TEXT,
    "type" TEXT,
    "image" TEXT,
    "point" INTEGER,
    "difficulty" INTEGER,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Options" (
    "id" SERIAL NOT NULL,
    "questionsID" INTEGER,
    "name" TEXT,
    "correct" BOOLEAN,

    CONSTRAINT "Options_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Options_questionsID_key" ON "Options"("questionsID");

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_typeQuestionsID_fkey" FOREIGN KEY ("typeQuestionsID") REFERENCES "TypeQuestions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Options" ADD CONSTRAINT "Options_questionsID_fkey" FOREIGN KEY ("questionsID") REFERENCES "Questions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
