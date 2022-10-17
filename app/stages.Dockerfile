# syntax=docker/dockerfile:1
FROM node:latest

WORKDIR /app

COPY package.json ./

COPY tsconfig.json ./

COPY src ./src

COPY .env .

RUN npm install

RUN npx tsc

EXPOSE 3000

CMD node build/index.js

