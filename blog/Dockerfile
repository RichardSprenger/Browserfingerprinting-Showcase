FROM node:latest as node
ARG ENVIRONMENT
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g @angular/cli
RUN ng build --configuration $ENVIRONMENT

FROM nginx:alpine
COPY --from=node /app/dist/blog /usr/share/nginx/html
# RUN sed -i '12i\    location /{\n\ttry_files $uri $uri/ /index.html;\n    }\n' /etc/nginx/conf.d/default.conf
RUN sed -i '10i\\ttry_files $uri $uri/ /index.html;' /etc/nginx/conf.d/default.conf
