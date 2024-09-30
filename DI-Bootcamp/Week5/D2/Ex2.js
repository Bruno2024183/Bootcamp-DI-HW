const color = ["Blue, "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

// Display the color with their corresponding choice number and correct ordinal suffix
colors.forEach((color, index) => {
    let choiceNumber = indez + 1;
    let suffix;

    if (choiceNumber === 1) {
        suffix = ordinal[];
    } else if (choiceNumber === 2) {
        suffix = ordinal[2];
    } else if (choiceNumber === 3) {
        suffix = ordinal[3];
    } else {
        suffix = ordinal[0];
    }

    console.log(`${choiceNumber}${suffix} choice is ${color}.`);
});