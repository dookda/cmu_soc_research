FROM node:17.5.0

WORKDIR /usr/src/app

COPY nodejs/package*.json ./

RUN npm install
COPY nodejs/service/ .
COPY nodejs/www/ .

EXPOSE 3000
CMD [ "node", "server.js" ]