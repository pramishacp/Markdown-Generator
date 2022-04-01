FROM node:16

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install -g nodemon
RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]