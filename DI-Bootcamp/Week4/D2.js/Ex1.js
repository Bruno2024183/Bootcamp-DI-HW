
const people = ["Greg", "Mary", "Devon", "James"];
undefined
// 1. Remove “Greg” from the people array
people.shift();
console.log(people);
VM506:3 (3) ['Mary', 'Devon', 'James']
undefined
// 2. Replace "James" with "Jason"
const indexOfJames = people.indexOf("James");
if (indexOfJames !== -1) {
    people[indexOfJames] = "Jason"; // Replaces "James" with "Jason"
}
console.log(people); // Output: ["Mary", "Devon", "Jason"]
undefined
// 3. Add your name to the end of the people array
people.push("Bruno");
console.log(people);
VM544:3 (4) ['Mary', 'Devon', 'James', 'Bruno']
undefined
// 4. Console.log Mary’s index
console.log(people.indexOf("Mary"));
VM565:2 0
undefined
// 5. Make a copy of the people array using the slice method
const newPeople = people.slice(1, 3);
console.log(newPeople);
VM632:3 (2) ['Devon', 'James']
undefined
// 6. Get the index of “Foo”
console.log(people.indexOf("Foo"));
VM659:2 -1
undefined
// 7. Create a variable called last which is the last element of the array
const last = people[people.length - 1];
console.log(last)
VM799:3 Bruno

// II - Loops
const people = ["Mary", "Devon", "Jason", Bruno];

// 1. Loop through the array and log each person
for (let i= 0; i < people.length; i++) {
    console.log(people[i]);
}

// Output:
// Mary
// Devon
// Jason
// Bruno

console.log("----");

// 2. Loop through the array and break after logging "Devon"
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break; // Exit the loop after logging "Devon"
    }
}

// Output:
// Mary
// Devon
