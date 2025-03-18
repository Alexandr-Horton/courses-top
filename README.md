# Courses Top - Образовательная платформа

Платформа для онлайн-обучения с каталогом курсов по различным направлениям.

## 🛠 Технологии

### Основные

-   **Next.js 14** - React фреймворк
-   **TypeScript** - Типизация
-   **CSS Modules** - Стилизация компонентов
-   **React Context** - Управление состоянием

### Библиотеки

-   **Axios** - HTTP-клиент для запросов
-   **Framer Motion** - Анимации
-   **React Hook Form** - Управление формами
-   **ClassNames** - Условные CSS классы
-   **React Yandex Metrika** - Аналитика

### Инфраструктура

-   **Docker** - Контейнеризация
-   **GitHub Actions** - CI/CD

## 🚀 Запуск проекта

### Требования

-   Node.js 20.17.0+
-   npm 11.2.0+

### Локальный запуск

```
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev
```

### Docker

```
# Сборка и запуск в Docker
docker build -t courses-top .
docker run -p 3000:3000 courses-top
```

## 📦 Структура проекта

```
courses-top/
├── components/     # UI компоненты
├── layout/         # Компоненты лейаута
├── pages/          # Страницы Next.js
├── styles/         # Глобальные стили
└── interfaces/     # TypeScript интерфейсы
```

## 🔧 Команды

-   `npm run dev` - Запуск в режиме разработки
-   `npm run build` - Сборка проекта
-   `npm run start` - Запуск production версии
-   `npm run lint` - Проверка кода

## 🔄 Автоматизация

Проект использует GitHub Actions для автоматизации процессов:

-   Автоматическая сборка при пуше в main ветку
-   Публикация Docker образа в GitHub Container Registry
-   Проверка типов и линтинг кода
