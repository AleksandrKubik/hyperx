     # Используем официальный образ Node.js в качестве базового
     FROM node:18-alpine

     # Устанавливаем рабочую директорию
     WORKDIR /app

     # Копируем package.json и package-lock.json
     COPY package*.json ./

     # Устанавливаем зависимости
     RUN npm install

     # Копируем все файлы проекта в контейнер
     COPY . .

     # Собираем проект
     RUN npm run build

     # Указываем порт, который будет использоваться приложением
     EXPOSE 3000

     # Запускаем приложение
     CMD ["npm", "start"]
