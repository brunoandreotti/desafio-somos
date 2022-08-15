FROM node:latest AS build

WORKDIR /usr/src/app

COPY package.json ./

COPY prisma ./prisma/

COPY ./prisma/seed.ts ./prisma/

COPY .env ./

COPY tsconfig.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:latest

WORKDIR /usr/src/app

COPY package.json ./

COPY prisma ./prisma/

COPY ./prisma/seed.ts ./prisma/

COPY .env ./

COPY tsconfig.json ./

RUN npm install

COPY --from=build /usr/src/app/dist dist

EXPOSE 3000

CMD  ["npm", "start"]

