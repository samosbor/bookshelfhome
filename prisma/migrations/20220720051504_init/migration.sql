-- CreateTable
CREATE TABLE "bookRequest" (
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
