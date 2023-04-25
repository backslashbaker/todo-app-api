const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const { v4: uuidv4 } = require("uuid");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

let todos = [{ id: uuidv4(), content: "Learn React", completed: false }];

app.use(cors());
app.use(bodyParser.json());

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.post("/api/todos", (req, res) => {
  const newTodo = {
    id: uuidv4(),
    content: req.body.content,
    completed: req.body.completed || false,
  };
  todos.push(newTodo);
  res.json(newTodo);
});

app.put("/api/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const updatedTodo = req.body;

  todos = todos.map((todo) =>
    todo.id === todoId ? { ...todo, ...updatedTodo } : todo
  );

  res.json(todos);
});

app.delete("/api/todos/:id", (req, res) => {
  const todoId = req.params.id;

  todos = todos.filter((todo) => todo.id !== todoId);

  res.json(todos);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
