FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g npm
RUN npm i -g nodemon
# COPY nodejs/service/ .
# COPY nodejs/www/ .

EXPOSE 3000
# CMD [ "node", "server.js" ]
CMD [ "nodemon", "server.js" ]

