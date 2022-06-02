FROM node:alpine
WORKDIR /app
COPY . .
ENV PATH /app/node_modules/.bin:$PATH
RUN npm i
RUN npm install -g npm@8.12.0
RUN npm run build
CMD ["npm","start"]
EXPOSE 3000