const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Import the book router
const bookRoutes = require('./routes/books');

// Use the books routes
app.use('/books', bookRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});