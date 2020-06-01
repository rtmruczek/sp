FROM node:13.3.0-alpine3.10
WORKDIR /home/stinkypinky
COPY node_modules ./node_modules
COPY lib ./lib
COPY .env ./
CMD ["node", "./lib/index.js"]