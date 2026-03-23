FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable pnpm
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/docs/package.json apps/docs/package.json
RUN pnpm install --frozen-lockfile
COPY apps/docs apps/docs
RUN pnpm --filter lux-docs build

FROM --platform=$BUILDPLATFORM golang:1.26-alpine AS server
WORKDIR /src
COPY go.mod go.sum ./
RUN go mod download
COPY serve.go .
ARG TARGETOS=linux
ARG TARGETARCH=amd64
RUN CGO_ENABLED=0 GOOS=${TARGETOS} GOARCH=${TARGETARCH} go build -ldflags="-w -s" -o /serve .

FROM alpine:3.23
RUN apk add --no-cache ca-certificates
COPY --from=server /serve /serve
COPY --from=build /app/apps/docs/out /app
EXPOSE 3000
HEALTHCHECK --interval=10s --timeout=3s CMD wget -q --spider http://localhost:3000/health || exit 1
CMD ["/serve"]
