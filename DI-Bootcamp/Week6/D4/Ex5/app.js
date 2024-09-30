// app.js

// Require lodash
const _ = require('lodash');

// Require the custom math module
const math = require('./math');

// Use the math module to perform calculations
const sum = math.add(10, 5);
const product = math.multiply(10, 5);

// Use lodash to find the sum of an array
const numbers = [10, 20, 30, 40];
const totalSum = _.sum(numbers);

// Print results
console.log(`The sum of 10 and 5 is: ${sum}`);
console.log(`The product of 10 and 5 is: ${product}`);
console.log(`The sum of the array [10, 20, 30, 40] is: ${totalSum}`);
