FROM node:alpine
WORKDIR /app
COPY . .
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install -g npm@8.12.1
RUN npm i
RUN npm run build
RUN serve -s build
CMD ["npm","start"]
EXPOSE 3000