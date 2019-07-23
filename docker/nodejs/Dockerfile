FROM node:8.15

WORKDIR /home/node/app

RUN npm install -g nodemon

COPY ./docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
USER 1000:1000
#CMD ["npm start"]
