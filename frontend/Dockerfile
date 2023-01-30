FROM node:18

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

ENV NODE_ENV=production

EXPOSE 3000

CMD [ "yarn", "start" ]