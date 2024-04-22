// Create web server with express.js
// Create a route for comments
// Create a route for comments/:id
// Export the router
// Path: index.js
// Import express.js
// Import comments.js
// Create an instance of express
// Use the comments router
// Start the server
// Test the comments route with Postman
// Test the comments/:id route with Postman

// comments.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Comments route');
});

router.get('/:id', (req, res) => {
  res.send(`Comment ${req.params.id}`);
});

module.exports = router;

// index.js
const express = require('express');
const commentsRouter = require('./comments');

const app = express();
app.use('/comments', commentsRouter);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Test the comments route with Postman
// Test the