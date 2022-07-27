#! /bin/sh

npx prisma migrate deploy
npx prisma studio &
npm run start