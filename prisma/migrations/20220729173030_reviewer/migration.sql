/*
  Warnings:

  - You are about to drop the column `name` on the `BookReview` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BookReview" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "author" TEXT,
    "reviewText" TEXT,
    "reviewer" TEXT
);
INSERT INTO "new_BookReview" ("author", "id", "reviewText", "title") SELECT "author", "id", "reviewText", "title" FROM "BookReview";
DROP TABLE "BookReview";
ALTER TABLE "new_BookReview" RENAME TO "BookReview";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
