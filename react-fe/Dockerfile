FROM node:alpine
WORKDIR /app
COPY . .
ENV PATH /app/node_modules/.bin:$PATH
RUN npm i
RUN npm install -g npm@8.12.0
CMD ["npm", "run", "build"]
EXPOSE 3000