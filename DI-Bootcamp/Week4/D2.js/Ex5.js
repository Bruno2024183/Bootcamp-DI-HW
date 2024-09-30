const family = {
    father: "Jhon",
    mother: "Jane",
    son: "Mike",
    daughter: "Emma"
};

// Log the keys of the object
for (let key in family) {
    console.log(key); // Output: father, mother, son, daughter
}

// Log the values of the object
for (let key in family) {
    console.log(family[key]); // Output: Jhon, Jane, Mike, Emma
}

