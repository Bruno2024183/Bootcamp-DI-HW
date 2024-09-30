// app.js

const express = require('express');
const app = express();
const port = 3000;

// Import the router
const routes = require('./routes/index');

// Use the router for all requests
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}
);
