FROM node:12.18.3-alpine3.12

WORKDIR /client/

COPY package*.json /client/

RUN yarn install

COPY . /client/

EXPOSE 3000

CMD ["yarn", "dev"]