const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Import the todo router
const todoRoutes = require('./routes/todos');

// Use the todos routes
app.use('/todos', todoRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});