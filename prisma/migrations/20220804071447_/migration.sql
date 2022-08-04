/*
  Warnings:

  - You are about to alter the column `rating` on the `BookReview` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BookReview" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "author" TEXT,
    "reviewText" TEXT,
    "rating" REAL NOT NULL DEFAULT 0,
    "reviewer" TEXT
);
INSERT INTO "new_BookReview" ("author", "created", "id", "rating", "reviewText", "reviewer", "title") SELECT "author", "created", "id", "rating", "reviewText", "reviewer", "title" FROM "BookReview";
DROP TABLE "BookReview";
ALTER TABLE "new_BookReview" RENAME TO "BookReview";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
