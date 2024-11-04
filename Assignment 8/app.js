const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route to display the contact form
app.get('/contact', (req, res) => {
  res.render('contact');
});

// Route to handle form submission (POST request)
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Render thankyou.ejs and pass the form data to the template
  res.render('thankyou', { name, email, message });
});

// Start the server
app.listen(3003, () => {
  console.log('Server is running on http://localhost:3003');
});
