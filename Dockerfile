FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application code to the working directory
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80
# Start Nginx
CMD ["nginx", "-g", "daemon off;"]