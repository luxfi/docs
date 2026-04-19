FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable pnpm
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/docs/package.json apps/docs/package.json
RUN pnpm install --frozen-lockfile
COPY apps/docs apps/docs
RUN pnpm --filter lux-docs build

FROM ghcr.io/hanzoai/spa
COPY --from=build /app/apps/docs/out /public
