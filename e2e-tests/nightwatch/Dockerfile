# Этот файл сгенерирован автоматически, не редактируйте его вручную

FROM node:10

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile && yarn cache clean

COPY e2e-tools.json ./
COPY nightwatch nightwatch/

RUN touch .env
ENV CI true

ENTRYPOINT yarn et nightwatch:run --browser remote_chrome
