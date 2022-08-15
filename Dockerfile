FROM node:latest

WORKDIR /usr/app

COPY package.json ./

COPY prisma ./prisma/

COPY ./prisma/seed.ts ./prisma/

COPY .env ./

COPY tsconfig.json ./

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD  ["npm", "start"]

