FROM nginx

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

RUN $(npm bin)/ng build --prod

COPY /dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]