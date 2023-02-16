# Use the official Node.js 14 Alpine image from https://hub.docker.com/_/node.
# Using an image with specific version tags allow deterministic builds.
FROM node:16.17.0-alpine

# Create and change to the app directory.
WORKDIR /usr/src/frontend

# Copy important root files to the builder image.
COPY package*.json ./

# Install production dependencies.
RUN npm install 

# Copy the Vue 3 source to the container image.
COPY . .

# Expose container port
EXPOSE 3000

# Run the Vue service on container startup.
CMD ["npm", "run", "dev"]
