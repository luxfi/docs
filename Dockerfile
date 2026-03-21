FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable pnpm
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/docs/package.json apps/docs/package.json
RUN pnpm install --frozen-lockfile
COPY apps/docs apps/docs
RUN pnpm --filter lux-docs build

FROM node:22-alpine
RUN npm install -g serve@14
COPY --from=build /app/apps/docs/out /app
EXPOSE 3000
HEALTHCHECK --interval=10s --timeout=3s CMD wget -q --spider http://localhost:3000/ || exit 1
CMD ["serve", "-s", "/app", "-l", "3000", "--no-clipboard"]
