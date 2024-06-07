FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./


RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm run build

EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
