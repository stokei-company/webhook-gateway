# Builder stage
FROM node:12.13-alpine AS builder-webhook-gateway

# Use /app as the CWD
WORKDIR /app            

# Copy package.json and package-lock.json to /app
COPY package*.json ./   

# Install all dependencies
RUN npm i --silent 

# Copy the rest of the code
COPY . .

# Invoke the build script to transpile ts code to js
RUN npm run build

# Final stage

FROM node:12.13-alpine AS webhook-gateway

# Set node environment to production
ENV NODE_ENV production

# Update the system
RUN apk --no-cache -U upgrade

# Prepare destination directory and ensure user node owns it
RUN mkdir -p /home/node/app/dist && chown -R node:node /home/node/app

# Set CWD
WORKDIR /home/node/app

# Install PM2
RUN npm i -g pm2

# Copy package.json, package-lock.json and process.yml
COPY package*.json ./
# process.yml ./

# Switch to user node
USER node

# Install libraries as user node
RUN npm i --only=production

# Copy js files and change ownership to user node
COPY --chown=node:node --from=builder-webhook-gateway /app/dist ./dist

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]