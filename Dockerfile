FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable pnpm
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/docs/package.json apps/docs/package.json
RUN pnpm install --frozen-lockfile
COPY apps/docs apps/docs
RUN pnpm --filter lux-docs build

# Compressed variants beside every text asset. The spa server sends `<file>.br`
# or `<file>.gz` when the request accepts it and the file exists — it never
# compresses on the fly. The search index alone is 30MB of JSON that gzips to
# 5MB; without these files every reader downloads the identity bytes.
RUN apk add --no-cache brotli \
 && cd /app/apps/docs/out \
 && find . -type f \( -name '*.html' -o -name '*.css' -o -name '*.js' -o -name '*.json' -o -name '*.txt' -o -name '*.svg' -o -name '*.xml' -o -name '*.map' -o -path './api/*' \) -size +1k \
    -exec gzip -9 -k {} \; -exec brotli -q 11 -k {} \;

FROM ghcr.io/hanzoai/spa:1.4.12
COPY --from=build /app/apps/docs/out /public
