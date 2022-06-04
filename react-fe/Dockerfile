FROM node:alpine
WORKDIR /app
COPY . .
ENV PATH /app/node_modules/.bin:$PATH
RUN npm i
RUN serve -s build
CMD ["npm","start"]
EXPOSE 3000