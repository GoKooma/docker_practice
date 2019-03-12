FROM node:10
WORKDIR /bros
COPY . .
RUN npm install
CMD ["npm", "start"]
