FROM node:18-alpine

WORKDIR /usr/app

COPY ./package*.json ./

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

CMD npm start --host 0.0.0.0 --port 3000 --disableHostCheck true
