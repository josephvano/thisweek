FROM node:14

ENV PORT=8083
ENV NEXT_TELEMETRY_DISABLED=1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
COPY yarn* .

RUN yarn install

COPY . /usr/src/app

RUN yarn run build
EXPOSE $PORT

CMD yarn run start -p $PORT