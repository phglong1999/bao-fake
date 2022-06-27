FROM nginx:1.23.0-alpine
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]