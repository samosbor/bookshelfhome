#! /bin/sh

npx prisma migrate deploy
npx prisma studio --port 8095 &
npm run start