ARG VARIANT=14
FROM node:${VARIANT}

WORKDIR /code

RUN cd /code && yarn install
