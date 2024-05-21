-- CreateTable
CREATE TABLE "Options" (
    "id" SERIAL NOT NULL,
    "questionsID" INTEGER,
    "name" TEXT,
    "correct" BOOLEAN,

    CONSTRAINT "Options_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Options_questionsID_key" ON "Options"("questionsID");

-- AddForeignKey
ALTER TABLE "Options" ADD CONSTRAINT "Options_questionsID_fkey" FOREIGN KEY ("questionsID") REFERENCES "Questions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
