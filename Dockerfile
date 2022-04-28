FROM node:16 AS building

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . /app

RUN yarn build
RUN yarn test

FROM node:16-alpine AS runtime

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY --from=building /app/dist /app/dist

CMD ["yarn", "start"]