const express = require('express');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Simulate user login status (true if logged in, false if not)
let isLoggedIn = false;

// Route for the home page (with navigation)
app.get('/', (req, res) => {
  // Render the 'index.ejs' and pass the 'isLoggedIn' variable
  res.render('index', { isLoggedIn });
});

// Start the server
app.listen(3002, () => {
  console.log('Server running on http://localhost:3002');
});
