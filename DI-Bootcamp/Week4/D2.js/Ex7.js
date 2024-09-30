const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "kyle"];

// Step 1: Extract the first letter of each name
let firstLetters = names.map(name => name[0]);

// Step 2: Sort the letters alphabetically
firstLetters.sort();

// Step 3: Join the sorted letters into a single string
let secretSocietyName = firstLetters.join("");

// Output the secret society name
console.log(secretSocietyName);