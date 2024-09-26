# Primera etapa: instalar dependencias.
FROM node:22.8.0-alpine3.20 as dependencies
WORKDIR /app
COPY package.json ./
RUN npm install

# Segunda etapa: construir la aplicación y ejecutar pruebas.
FROM node:22.8.0-alpine3.20 as builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run test

# Tercera etapa: Instalar solo las dependencias de producción.
FROM node:22.8.0-alpine3.20 as production
WORKDIR /app
COPY package.json ./
RUN npm install --prod

# Cuarta etapa: Ejecutar la aplicación.
FROM node:22.8.0-alpine3.20 as runner
WORKDIR /app
COPY --from=production /app/node_modules ./node_modules
COPY app.js ./
COPY tasks/ ./tasks
CMD ["node", "app.js"]