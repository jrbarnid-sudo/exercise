FROM node:12.18.3-alpine3.12

WORKDIR /server/

COPY package*.json /server/

RUN yarn install

COPY . /server/

EXPOSE 8080

CMD ["node", "index.js"]