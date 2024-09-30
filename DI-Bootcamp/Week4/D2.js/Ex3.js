let userInput = prompt("4"); // Prompt the user for a number
userInput = Number(userInput); // Convert the input to a number

while (user < 10) { // While the number is less than 10
    userInput = prompt("The number is less than 10. Please enter a new number:"); // Ask for a new number
    userInput = Number(userInput); // Convert the input to a number again
    }


console.log(`You've entered a valid number: ${userInput}`); // Once the loop ends, log the valid number


let userInput;

do {
    userInput = Number(prompt("5")); // Promt and convert in one step
} while (userInput < 10); // Repeat while the number is less than 10

console.log(`You've entered a valid number: ${userInput}`);

