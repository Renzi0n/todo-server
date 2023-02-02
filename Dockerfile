FROM node:16

WORKDIR /

COPY package.json ./
RUN npm install
COPY db.json ./db.json
COPY server.js ./server.js

EXPOSE 3000

CMD [ "npm", "run", "start"]