# syntax = docker/dockerfile:1.3
FROM node:18.8.0-alpine3.15 as build
ARG REACT_APP_ENV_ARG
ARG REACT_APP_IS_ENTERPRISE
ENV REACT_APP_ENV=$REACT_APP_ENV_ARG
ENV REACT_APP_IS_ENTERPRISE=$REACT_APP_IS_ENTERPRISE
ENV GENERATE_SOURCEMAP=false
RUN mkdir /home/workspace
COPY . /home/workspace
WORKDIR /home/workspace
RUN apk -U add git
RUN npm install
RUN npm run build && rm -f build/mockServiceWorker.js

FROM alpine:3.15.4
RUN mkdir -p /var/www/app
COPY --from=build  /home/workspace/build/ /var/www/app/gazebo
