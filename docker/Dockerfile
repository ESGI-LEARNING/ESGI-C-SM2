FROM docker.io/node:21-alpine as build

RUN mkdir -p /build

WORKDIR /build

COPY . .

RUN npm install
RUN npm run build

RUN ls -alh /build/dist

FROM docker.io/nginx:alpine

RUN mkdir -p /app
RUN mkdir -p /usr/share/nginx/html

COPY --from=build /build/dist /usr/share/nginx/html
COPY public /usr/share/nginx/html
COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

RUN apk update && \
    apk upgrade && \
    apk add --no-cache tzdata && \
    rm -rf /var/cache/apk/*

ENV TZ=Europe/Paris
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
