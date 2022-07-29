-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BookRequest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "author" TEXT,
    "format" TEXT,
    "notification" BOOLEAN NOT NULL DEFAULT false,
    "anonymous" BOOLEAN NOT NULL DEFAULT false,
    "email" TEXT,
    "name" TEXT,
    "fufilled" BOOLEAN NOT NULL DEFAULT false,
    "linkToEbook" TEXT,
    "linkToAudio" TEXT
);
INSERT INTO "new_BookRequest" ("anonymous", "author", "email", "format", "fufilled", "id", "linkToAudio", "linkToEbook", "name", "notification", "title") SELECT "anonymous", "author", "email", "format", "fufilled", "id", "linkToAudio", "linkToEbook", "name", "notification", "title" FROM "BookRequest";
DROP TABLE "BookRequest";
ALTER TABLE "new_BookRequest" RENAME TO "BookRequest";
CREATE TABLE "new_BookReview" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "author" TEXT,
    "reviewText" TEXT,
    "reviewer" TEXT
);
INSERT INTO "new_BookReview" ("author", "id", "reviewText", "reviewer", "title") SELECT "author", "id", "reviewText", "reviewer", "title" FROM "BookReview";
DROP TABLE "BookReview";
ALTER TABLE "new_BookReview" RENAME TO "BookReview";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
