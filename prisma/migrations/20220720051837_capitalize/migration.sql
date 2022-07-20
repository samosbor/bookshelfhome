/*
  Warnings:

  - You are about to drop the `bookRequest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "bookRequest";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "BookRequest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "author" TEXT,
    "format" TEXT,
    "notification" BOOLEAN NOT NULL DEFAULT false,
    "email" TEXT,
    "name" TEXT,
    "fufilled" BOOLEAN NOT NULL DEFAULT false,
    "linkToFill" TEXT
);
