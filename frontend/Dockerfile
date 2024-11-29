
FROM node:16-slim AS build

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install --frozen-lockfile

COPY . /app/

RUN npm run build

FROM nginx:alpine


COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]
