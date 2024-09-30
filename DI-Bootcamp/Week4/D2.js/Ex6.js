const details = {
    my: 'name'
    is: 'Rudolf',
    the: 'reinder'
};

// Initialize an empty string to build the sentence
let sentence = "";

// Use a for...in loop to iterate through the object
for(let key in details) {
    // Concatenate the key and value, follawed by a space
    sentence += key + " " + details[key] + " ";
}

// Trim the trailing space and lof the sentence
console.log(sentence.trim());