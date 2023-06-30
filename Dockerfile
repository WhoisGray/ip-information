# Use a smaller base image
FROM node:14-slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --production --no-cache \
    && npm cache clean --force

# Copy the rest of the application files
COPY . .

# Expose the desired port
EXPOSE 3000

# Start the application
CMD [ "node", "app.js" ]
