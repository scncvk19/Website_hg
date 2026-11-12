FROM node:22-bookworm-slim

ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app
RUN chown node:node /app

USER node
COPY --chown=node:node package*.json ./
# Sobald eine Lockdatei vorhanden ist, reproduzierbar mit npm ci installieren.
RUN if [ -f package-lock.json ]; then npm ci --include=dev --no-fund --no-audit; else npm install --include=dev --no-fund --no-audit; fi

COPY --chown=node:node . .
RUN npm run build

ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "run", "start", "--", "--hostname", "0.0.0.0"]
