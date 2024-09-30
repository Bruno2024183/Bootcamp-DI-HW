function kgtoGrams(weightInKG) {
    return weightInKG * 1000;
}


// Invoking the function
console.log(kgToGrams(5)); // Output: 5000


const kgToGramsExpression = function(weightInKg) {
    return weightInKg * 1000;
};

// Invoking the function
console.log(kgToGramsExpression(5)); // Output: 5000


// The key difference is that function declarations are hoisted, meaning they can be called before they are defined, while function expression are not hoisted.


const kgToGramsArrow = (weightInKG) => weightInKG * 1000;


// Invoking the function
console.log(kgToGramsArrow(5)); // Output: 5000