FROM node:16-alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install sharp
RUN npm ci
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

ENV DATABASE_URL=file:/app/prisma/prod.db

RUN npm run build
RUN chmod a+rwx -R /app/prisma
RUN npx prisma generate
RUN chmod a+rwx -R /app/prisma
RUN npx prisma migrate deploy
RUN chmod a+rwx -R /app/prisma

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs

EXPOSE 8093

ENV PORT 8093

CMD ["npx", "next", "start"] 