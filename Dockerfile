FROM docker.io/node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM docker.io/nginx:alpine

COPY --from=build /app /usr/share/nginx/html

COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
