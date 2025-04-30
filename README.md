# 🚀 Todo API

A powerful REST API for managing your todos, built with NestJS and MongoDB.

## ✨ Features

- 🔐 JWT Authentication
- 📝 CRUD operations for tasks
- 🎯 User-specific tasks
- 🛡️ Input validation
- 📦 MongoDB integration
- 🔄 RESTful endpoints

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Docker
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/OmarJ9/todo-api-nestjs.git
cd todo-app-api
```

2. Create a `.env` file:

```bash
MONGO_URI=mongodb://localhost:27017/todo

JWT_ACCESS_SECRET=secret
JWT_ACCESS_EXPIRATION=15m
JWT_REFRESH_SECRET=secret
JWT_REFRESH_EXPIRATION=7d
```

3. Start MongoDB with Docker:

```bash
docker-compose up -d
```

4. Install dependencies:

```bash
npm install
```

5. Run the application:

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod
```
