FROM node

WORKDIR /app

COPY package*.json .

RUN yarn

COPY . .

EXPOSE 3333


CMD yarn ts-node-dev --respawn --transpile-only src/server.ts

