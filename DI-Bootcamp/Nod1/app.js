import persons from './data.js';

// Function to calculate average age
function calculateAverageAge(personsArray) {
  const totalAge = personsArray.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / personsArray.length;
  return averageAge;
}

// Calculate and print the average age
const averageAge = calculateAverageAge(persons);
console.log(`The average age is ${averageAge.toFixed(2)} years.`);
