FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm run build
RUN npm install -g serve
EXPOSE 5000
CMD serve -s build
