FROM node:16-alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install sharp
RUN npm ci
COPY prisma ./prisma/
RUN chmod a+rwx -R ./prisma
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

ENV DATABASE_URL=file:/app/prisma/prod.db

RUN npm run build
RUN npx prisma generate
RUN chmod +x startup.sh

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs

EXPOSE 8093

ENV PORT 8093

CMD ["/bin/sh", "startup.sh"]