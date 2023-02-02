FROM node:16

WORKDIR /

COPY package.json ./
RUN npm install
COPY server.js ./server.js
COPY public ./public

EXPOSE 3000

CMD [ "npm", "run", "start"]