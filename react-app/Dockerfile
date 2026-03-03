#build stage
FROM node:20-alpine AS build
WORKDIR /app
#copy package.json and package-lock.json
COPY package*.json ./
RUN npm install
#copy the rest of the application
COPY . ./
RUN npm run build

#transfer the build output to the nginx folder /usr/share/nginx/html 
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
