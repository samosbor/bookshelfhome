#! /bin/sh

npx prisma migrate deploy
npx prisma studio &
npx run start