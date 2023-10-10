# Star Wars Microservices REST API

Welcome to the Star Wars Microservices REST API, a collection of microservices that provide information about the Star Wars universe.

## Features

- CRUD operations for Characters, Planets and Films from Star Wars universe.
- Error handling

## Technologies

- Node.js
- TypeScript
- Express
- MongoDB
- Mongoose
- HTTP-Proxy-Middleware
- Docker

## Scripts

- `dev`: Run the server.

## Docker Scripts

- `docker-compose build`: Build images.
- `docker-compose up`: Run container with images.

## API endpoints

### Characters

- `GET /characters`: Get all characters
- `GET /characters/:id`: Get one character by ID
- `POST /characters`: Create a new character
- `PUT /characters/:id`: Update a character by ID
- `DELETE /characters/:id`: Delete a character by ID

### Planets

- `GET /planets`: Get all planets
- `GET /planets/:id`: Get one planet by ID
- `POST /planets`: Create a new planet
- `POST /planets/:id`: Update a planet by ID
- `DELETE /planets/:id`: Delete a planet by ID

### Films

- `GET /films`: Get all film
- `GET /films`: Get one film by ID
- `POST /films`: Create a new film
- `POST /films/:id`: Update a film by ID
- `DELETE /films/:id`: Delete a film by ID

---

🚀Explore the Star Wars universe with our microservices API! 🌌 May the Force be with you 🌟
