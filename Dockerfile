FROM node:22-alpine

# Define diretório de trabalho
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build --workspace front

RUN rm /app/.env

ENV PORT=8001
ENV VITE_PORT=9001

EXPOSE ${PORT}
EXPOSE ${VITE_PORT}

CMD ["npm", "run", "start:dev"]