FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable pnpm
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/docs/package.json apps/docs/package.json
RUN pnpm install --frozen-lockfile
COPY apps/docs apps/docs
RUN pnpm --filter docs build

FROM nginx:alpine
COPY --from=build /app/apps/docs/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
