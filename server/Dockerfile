FROM node:14
WORKDIR /server
COPY ./package.json ./package.json

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "docker-build-webapp"]