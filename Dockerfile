FROM node:19
# WORKDIR
COPY package*.json ./
RUN npm install && npm install -g nodemon
COPY . .
ENV PORT=8080
EXPOSE 8080
CMD [ "npm", "run", "dev" ]