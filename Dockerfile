FROM node:17.5.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 4000
CMD [ "node", "server.js" ]