/*
  Warnings:

  - You are about to drop the column `questionsID` on the `Options` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Options" DROP CONSTRAINT "Options_questionsID_fkey";

-- DropIndex
DROP INDEX "Options_questionsID_key";

-- AlterTable
ALTER TABLE "Options" DROP COLUMN "questionsID";

-- CreateTable
CREATE TABLE "_QuestionsToOptions" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_QuestionsToOptions_AB_unique" ON "_QuestionsToOptions"("A", "B");

-- CreateIndex
CREATE INDEX "_QuestionsToOptions_B_index" ON "_QuestionsToOptions"("B");

-- AddForeignKey
ALTER TABLE "_QuestionsToOptions" ADD CONSTRAINT "_QuestionsToOptions_A_fkey" FOREIGN KEY ("A") REFERENCES "Options"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuestionsToOptions" ADD CONSTRAINT "_QuestionsToOptions_B_fkey" FOREIGN KEY ("B") REFERENCES "Questions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
