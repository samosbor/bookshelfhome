/*
  Warnings:

  - You are about to drop the column `linkToFill` on the `BookRequest` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BookRequest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "author" TEXT,
    "format" TEXT,
    "notification" BOOLEAN NOT NULL DEFAULT false,
    "email" TEXT,
    "name" TEXT,
    "fufilled" BOOLEAN NOT NULL DEFAULT false,
    "linkToEbook" TEXT,
    "linkToAudio" TEXT
);
INSERT INTO "new_BookRequest" ("author", "email", "format", "fufilled", "id", "name", "notification", "title") SELECT "author", "email", "format", "fufilled", "id", "name", "notification", "title" FROM "BookRequest";
DROP TABLE "BookRequest";
ALTER TABLE "new_BookRequest" RENAME TO "BookRequest";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
