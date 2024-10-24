const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use EJS as templating engine
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Static list of blog posts (to mimic a database)
let posts = [
  { title: 'My First Blog Post', body: 'This is the body of my first post!' },
  { title: 'Learning EJS', body: 'EJS is a simple templating engine for Express.' }
];

// Route to display the list of blog posts
app.get('/posts', (req, res) => {
  res.render('posts', { posts });
});

// Route to handle form submission for new posts
app.post('/posts', (req, res) => {
  const newPost = {
    title: req.body.title,
    body: req.body.body
  };
  
  // Add new post to the posts array
  posts.push(newPost);

  // Redirect back to the posts page
  res.redirect('/posts');
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
