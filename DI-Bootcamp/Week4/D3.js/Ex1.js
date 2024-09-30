function displayNumbersDisvisible(divisor = 23) {
    let sum = 0;

    // Loop through numbers from 0 to 500
    for (let i = 0; i <= 500; i++) {
        // Check if the number is divisible by the divisor
        if (i % divisor === 0) {
            console.log(1);
            // sum += i; // Add the number to the sum
        }
    }

// Print the sum of all numbers divisible by the divisor
console.log("Sum:", sum);
}

// Call the function with the default divisor of 23
displayNumbersDisvisible();

// Example calls with different divisors
displayNumbersDisvisible(3); // Numbers divisible by 3
displayNumbersDisvisible(45); // Numbers divisible by 45



