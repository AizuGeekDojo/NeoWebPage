ARG VARIANT=14
FROM node:${VARIANT}

WORKDIR /code

RUN yarn install
