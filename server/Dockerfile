FROM node:14-slim

WORKDIR /server

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn

COPY . .

EXPOSE 5000

CMD [ "yarn", "start" ]