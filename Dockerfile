FROM node:12-alpine as build

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
RUN node --max_old_space_size=2048 node_modules/@angular/cli/bin/ng build --prod


FROM nginx:1.19.1-alpine
COPY --from=build /app/dist/kbasar-dev /usr/share/nginx/html
