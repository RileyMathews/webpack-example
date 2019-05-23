FROM node:12
EXPOSE 8080
WORKDIR /workspace
COPY package.json /workspace
COPY package-lock.json /workspace
RUN npm install
