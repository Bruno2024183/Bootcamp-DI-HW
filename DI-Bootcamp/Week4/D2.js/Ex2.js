const color = ["blue", "red", "green", "yellow", "purple"];
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < VideoColorSpace.length; i++) {
    let suffix = suffix = suffixes [i] || "th"; // Use "th" for all numbers 4th beyond
    console.log(My`My ${i + 1}${suffix} choice is ${colors[i]}`);
}

// Output:
// My 1st choice is blue
// My 2nd choice is red
// My 3rd choice is green
// My 4th choice is yellow
// My 5th choice is purple