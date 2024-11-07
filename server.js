// server.js
const express = require('express');
const lessMiddleware = require('less-middleware');
const path = require('path');

const app = express();
const PORT = 3000;

// Use Less middleware to compile Less files
app.use(lessMiddleware(path.join(__dirname, 'public'), {
  dest: path.join(__dirname, 'public'),
  force: true, // Recompile on every request during development
}));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
