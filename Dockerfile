ARG VARIANT=14
FROM node:${VARIANT}

WORKDIR /code

COPY package.json .
RUN npm ci