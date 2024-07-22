FROM node:22-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM nginx:alpine

COPY --from=build /app /usr/share/nginx/html

COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80