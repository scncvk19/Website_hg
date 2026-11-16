FROM node:22-bookworm-slim

ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app
RUN chown node:node /app

USER node
COPY --chown=node:node package.json package-lock.json ./
RUN npm ci --include=dev --no-fund --no-audit

COPY --chown=node:node . .
RUN npm run build

ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "run", "start", "--", "--hostname", "0.0.0.0"]
