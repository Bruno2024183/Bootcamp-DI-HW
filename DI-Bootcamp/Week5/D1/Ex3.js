const issString = value => typeof value ==='string';


// Example usage:
console.log(isString('hello')); // true
console.log(issString([1, 2, 3, 4, 0]));  // false