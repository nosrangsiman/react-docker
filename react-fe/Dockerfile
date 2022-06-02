FROM node:alpine
WORKDIR /app
COPY . .
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install
RUN npm run build
CMD ["npm","start"]
EXPOSE 3000