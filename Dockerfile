FROM nginx:alpine

COPY . /usr/share/nginx/html

COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80