FROM node:19-alpine as dev-deps
WORKDIR /app
COPY package*.json ./
RUN npm install



FROM node:19-alpine as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN npm run build



FROM nginx:1.23.4 as prod
EXPOSE 80

COPY --from=builder /app/dist /usr/share/nginx/html
COPY public/ /usr/share/nginx/html/assets
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

CMD [ "nginx", "-g", "daemon off;" ]
