# Use the official Node.js 14 Alpine image from https://hub.docker.com/_/node.
# Using an image with specific version tags allow deterministic builds.
FROM node:14.16.1 AS builder

# Create and change to the app directory.
WORKDIR /usr/src/backend

# Copy important root files to the builder image.
COPY package*.json ./

# Install production dependencies.
RUN npm install 

# Copy the Backend source to the container image.
COPY . .

# build app for production with minification
RUN npm run build

EXPOSE 1337

# Init final image generation.
FROM node:14.16.1

# Run the Strapi service on container startup.
CMD ["npm", "start"]
