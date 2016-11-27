FROM node:7-alpine

MAINTAINER Rob Powell

COPY . /app/

WORKDIR /app/

RUN npm install

ENTRYPOINT ["node", "/app/server.js"]