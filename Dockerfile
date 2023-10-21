FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn run build && yarn prisma generate

COPY .next ./.next

CMD ["yarn", "run", "dev"]
