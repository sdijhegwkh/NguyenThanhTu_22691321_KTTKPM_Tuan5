# Stage 1: build React
FROM node:18 AS build

WORKDIR /app

COPY react-app/package*.json ./
RUN npm install

COPY react-app/ .
RUN npm run build

# Stage 2: Nginx serve
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]