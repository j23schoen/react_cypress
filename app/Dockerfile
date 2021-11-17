FROM node:latest
WORKDIR /app

RUN npm install -g npm@8.1.3
#RUN rm -rf /usr/local/lib/node_modules/npm
#RUN #mv node_modules/npm /usr/local/lib/node_modules/npm

COPY package.json* /app
RUN npm install

COPY . /app
CMD ["npm", "run", "start"]
