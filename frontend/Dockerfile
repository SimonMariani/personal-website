##################
### BASE STAGE ###
##################
FROM node:24-alpine3.22 AS base

# Set the working directory
WORKDIR /app

# Copy package.json and lock files
COPY package*.json ./

# Use cache mount to speed up install of existing dependencies
RUN --mount=type=cache,target=/usr/src/app/.npm \
  npm set cache /usr/src/app/.npm && \
  npm install

# Copy project files
COPY . .


#########################
### DEVELOPMENT STAGE ###
#########################
FROM base AS development

# Expose the dev server port
EXPOSE 3000

# Command to start the dev server and create the environment config which is used by the index.html file
CMD ["npm", "run", "dev", "--", "--host"]

###################
### BUILD STAGE ###
###################
FROM base AS build

# Build the app for production
RUN npm run build


########################
### PRODUCTION STAGE ###
########################
FROM nginx:1.29.0-alpine AS production

# Remove default NGINX files
RUN rm -rf /usr/share/nginx/html/*

# Copy built static files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port that NGINX will listen on
EXPOSE 80

# Command to run the nginx server in the foreground
CMD ["nginx", "-g", "daemon off;"]
