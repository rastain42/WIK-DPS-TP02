# syntax=docker/dockerfile:1
FROM node:latest as builder

WORKDIR /app

COPY package.json ./

COPY tsconfig.json ./

COPY src ./src

COPY .env .

RUN npm install

RUN npx tsc

## stage two

FROM node:latest as run

RUN adduser runner

USER runner

WORKDIR /app

COPY --from=builder ./app/build ./build

COPY --from=builder ./app/.env ./.env

COPY --from=builder ./app/node_modules /node_modules

EXPOSE 3000

CMD node build/index.js
