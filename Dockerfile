FROM node:12.18.2-alpine as build

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /app/

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /app/

# Set ENV
ENV PATH /app/node_modules/.bin:$PATH

# Run app
RUN npm run prod


FROM nginx:1.19.1-alpine
COPY --from=build /app/dist/kbasar-dev /usr/share/nginx/html
