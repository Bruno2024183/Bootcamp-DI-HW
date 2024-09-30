// routes/index.js

const express = require('express');
const router = express.Router();

// Define the home page route
router.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// Define the about page route
router.get('/about', (req, res) => {
  res.send('This is the About Us page.');
});

module.exports = router;