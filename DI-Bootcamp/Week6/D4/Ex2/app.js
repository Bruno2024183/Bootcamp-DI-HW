// app.js

// Import the persons array from data.js
import persons from './data.js';

// Function to calculate the average age of persons
function calculateAverageAge() {
  const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / persons.length;
  console.log(`The average age is ${averageAge.toFixed(2)} years.`);
}

// Call the function to calculate and print the average age
calculateAverageAge();


{
    "type": "module"
  }


  node app.js
