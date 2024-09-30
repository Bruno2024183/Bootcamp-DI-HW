const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'array']

const combinedString = epic.reduce((accumulator, currentValue) => {
    return accumulator + " " + currentValue;
});

console.log(combinedString);
// Output: "a long time ago in a galaxy far far away"


