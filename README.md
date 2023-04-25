# Todo App Backend

This is the backend for the Todo App, a simple Express server with a RESTful API for managing todos.

## Features

- Create, read, update, and delete todos
- Filter todos by their completion status

## Prerequisites

- [Node.js](https://nodejs.org/en/) >= 19.1.0

## Getting Started

1. Clone the repository:

```
git clone https://github.com/backslashbaker/todo-app-api.git
```

```
cd todo-app-api/
```

2. Install the dependencies:

```
npm install
```

3. Create a `.env` file in the `backend` folder to store your environment variables, such as the server port: PORT=3001

4. Start the development server:

```
npm start
```

The server should now be running at `http://localhost:3001` (or the port specified in your `.env` file).

## API Endpoints

The following API endpoints are available:

- `GET /api/todos`: Retrieve all todos
- `POST /api/todos`: Create a new todo
- `PUT /api/todos/:id`: Update an existing todo
- `DELETE /api/todos/:id`: Delete a todo

## Testing

You can test the API endpoints using a tool like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/).

## Deployment

To deploy the backend, follow the instructions provided by your hosting provider.

## Contributing

If you'd like to contribute to this project, please submit a pull request with your proposed changes.

## License

This project is licensed under the MIT License.
