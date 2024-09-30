// shop.js

// Import the products array from products.js
const products = require('./products');

// Function to search for a product by name
function findProductByName(productName) {
  const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());

  if (product) {
    console.log(`Product found: ${product.name}, Price: $${product.price}, Category: ${product.category}`);
  } else {
    console.log(`Product with the name "${productName}" not found.`);
  }
}

// Test the function with different product names
findProductByName('Laptop');
findProductByName('Shoes');
findProductByName('Watch');
findProductByName('Tablet');  // This will not exist in the list

node shop.js
