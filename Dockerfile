FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install sharp
RUN npm ci  || \
  (echo "Lockfile not found." && exit 1)


# Rebuild the source code only when needed
FROM node:16-alpine
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

VOLUME /app/prisma
ENV DATABASE_URL=file:/app/prisma/prod.db

RUN npm run build
RUN chmod a+rwx /app/prisma/prod.db
RUN npx prisma generate
RUN npx prisma migrate deploy

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs

EXPOSE 8093

ENV PORT 8093

CMD ["npx", "next", "start"] 