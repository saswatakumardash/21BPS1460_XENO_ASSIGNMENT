# 21BPS1460_XENO_ASSIGNMENT


**Author**: Saswata Kumar Dash  
**Registration Number**: 21BPS1460  
**Frontend Link**: [CRM Frontend](https://21-bps-1460-xeno-assignment.vercel.app/audiences)

---

## Project Overview

This is a **mini CRM (Customer Relationship Management) website** designed for managing customer interactions, data, and tasks. The project consists of a **frontend application** built with **React.js** and a **backend server** using **TypeScript**, **Kafka**, and **Prisma ORM**.

The goal of this project is to showcase seamless integration of microservices with Apache Kafka for message brokering and a user-friendly frontend interface for customer data management.

---

## Features

1. **User-Friendly Frontend**:
   - Intuitive UI built with React.js
   - Allows CRUD operations for customer data

2. **Backend with Kafka Integration**:
   - Kafka ensures efficient, real-time message streaming for managing events and updates

3. **Prisma ORM for Database Management**:
   - Simplifies schema definition and data querying

4. **Scalable Architecture**:
   - Backend and frontend operate independently, enabling easy scaling

5. **Dockerized Deployment**:
   - Docker support for consistent deployment and testing

---

## Project Structure

### Backend

```plaintext
api/
├── prisma/
│   └── schema.prisma         # Database schema
├── src/
│   ├── router/
│   │   └── index.ts          # API routes
│   ├── services/
│   │   └── kafkaService.ts   # Kafka integration
│   └── server.ts             # Server entry point
├── di-workers/               # Kafka consumer workers
│   └── index.js
├── .env                      # Environment variables
├── package.json
├── tsconfig.json             # TypeScript configuration
└── Dockerfile
```

### Frontend

```plaintext
frontend/
├── public/
│   └── index.html            # Main HTML file
├── src/
│   ├── components/           # Reusable React components
│   ├── pages/                # Pages for the CRM
│   │   ├── Dashboard.js
│   │   ├── Customers.js
│   │   └── Settings.js
│   ├── App.js                # Main App entry point
│   └── index.js              # React entry point
├── .env                      # Environment variables for API URL
├── package.json
└── Dockerfile
```

---

## Installation and Usage

### Prerequisites

1. **Node.js** (for both frontend and backend)
2. **Kafka** (for message brokering)
3. **Docker** (optional for containerized deployment)

---

### Backend

#### Steps to Run the Backend:

1. Navigate to the backend directory:
   ```bash
   cd api
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Configure environment variables:
   Create a `.env` file in the `api/` directory with the following content:
   ```plaintext
   DATABASE_URL=<DATABASE_CONNECTION_STRING>
   KAFKA_BROKER=<KAFKA_BROKER_URL>
   KAFKA_TOPIC=<KAFKA_TOPIC_NAME>
   ```

4. Start the server:
   ```bash
   yarn start
   ```

5. Optionally, build and run the Docker container:
   ```bash
   docker build -t crm-backend .
   docker run -p 3000:3000 crm-backend
   ```

---

### Frontend

#### Steps to Run the Frontend:

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the `frontend/` directory with the following content:
   ```plaintext
   REACT_APP_API_URL=http://localhost:3000
   ```

4. Start the frontend:
   ```bash
   npm start
   ```

5. Optionally, build and run the Docker container:
   ```bash
   docker build -t crm-frontend .
   docker run -p 3001:3000 crm-frontend
   ```

---

## How to Use the Application

1. Start Kafka Broker:
   Ensure Kafka is running and matches the broker URL and topic in the backend `.env` file.

2. Run Backend and Frontend:
   - Start the backend server (`yarn start` or via Docker)
   - Start the frontend (`npm start` or via Docker)

3. Access the CRM Website:
   - Open `http://localhost:3001` in your browser or visit [CRM Frontend](https://21-bps-1460-xeno-assignment.vercel.app/audiences)
   - Manage customer interactions, view data, and perform CRUD operations

4. Real-time Messaging:
   - Kafka enables real-time data streaming, ensuring instant updates across services

---

## Notes

- The backend API endpoints are pre-configured to handle Kafka-based events
- Make sure Kafka is properly set up before starting the backend
- Docker is optional but recommended for consistent builds and testing

