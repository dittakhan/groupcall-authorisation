FROM mhart/alpine-node:8.16.2

WORKDIR /user/src/app

#Install app dependencies
COPY package.json package-lock.json /tmp/
RUN cd /tmp && npm set progress=false && npm ci

#Create app directory and copy node_modules from tmp
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app/
WORKDIR /usr/src/app

#Copy src files and compile
COPY . /usr/src/app
RUN npm run build

#Expose port
EXPOSE 4000

#Set SERVICE environment variable to management-service
ENV SERVICE hello-winston

CMD ["npm","start"]