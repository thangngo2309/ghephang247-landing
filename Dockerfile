# ---------- Base stage ----------
FROM node:20-alpine AS base
WORKDIR /app
ENV NODE_ENV=production

# ---------- Dependencies ----------
COPY package*.json ./
RUN npm ci

# ---------- Build stage ----------
COPY . .
RUN npm run build

# ---------- Runner ----------
EXPOSE 3002
ENV PORT=3002

CMD ["npm", "start"]
