FROM node:22-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN npm install

COPY . .

RUN npm run build

ENV PORT=${PORT}

EXPOSE ${PORT}

ENV DATABASE_URL=${DATABASE_URL}

CMD ["node", "start"]
