const users = { user1: 18273, user2: 92833, user3: 90315 };

// Step 1: Convert the users object into an array
const usersArray = Object.entries(users);
console.log(usersArray);
// Output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

// step 2: Multiply each user's ID by 2
const modifiedUsersArray = usersArray.map(([user, id]) => [user, id * 2]);
console.log(modifieUsersArray);
// Output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]