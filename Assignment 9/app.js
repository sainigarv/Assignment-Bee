const express = require('express');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files (e.g., images) from the 'public' directory
app.use(express.static('public'));

// Sample product data
const products = [
  {
    image: '/images/product1.jpg',
    name: 'Product 1',
    description: 'This is the description for Product 1.'
  },
  {
    image: '/images/product2.jpg',
    name: 'Product 2',
    description: 'This is the description for Product 2.'
  },
  {
    image: '/images/product3.jpg',
    name: 'Product 3',
    description: 'This is the description for Product 3.'
  }
];

// Route to display the product catalog
app.get('/catalog', (req, res) => {
  res.render('catalog', { products });
});

// Start the server
app.listen(3004, () => {
  console.log('Server is running on http://localhost:3004');
});
