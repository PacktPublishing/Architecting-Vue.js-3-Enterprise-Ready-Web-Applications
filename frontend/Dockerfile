# Use the official Node.js 14 Alpine image from https://hub.docker.com/_/node.
# Using an image with specific version tags allow deterministic builds.
FROM node:fermium-alpine3.14 AS builder

# Create and change to the app directory.
WORKDIR /app

# Copy important root files to the builder image.
COPY package*.json ./

# Install production dependencies.
RUN npm install 

# Copy the Vue 3 source to the container image.
COPY . .

# build app for production with minification
RUN npm run build

# Production stage
FROM nginx:stable-alpine as production-stage

# Copy the Vue 3 source to the container image.
COPY --from=builder /app/dist /usr/share/nginx/html

VOLUME /app/node_modules

EXPOSE 80

# Run the Vue service on container startup.
CMD ["nginx", "-g", "daemon off;"]