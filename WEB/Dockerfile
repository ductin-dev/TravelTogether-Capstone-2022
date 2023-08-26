# Stage 1: build
FROM node:16-alpine as build

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .

# ENV REACT_APP_CONFIG_SERVICE=http://travel-together-production.eastus2.cloudapp.azure.com/api
# ENV REACT_APP_SOCKET_URL=http://travel-together-production.eastus2.cloudapp.azure.com

RUN npm run build

# Stage 2: prod
FROM nginx:1.21.5-alpine

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html
# CMD [ "node", "nginx", "-g", "daemon off;" ]