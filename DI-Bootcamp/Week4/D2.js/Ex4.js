console.log (building.numberOfFloors); // Output 4


console.log(building.numbersOfAptByFloor.firstFloor); // Output: 3
console.log(building.numberOfAptByFloor.thirdFloor); // Output: 9


const secondTenant = building.nameOFTenants[1]; // "Dan"
console.log(secondTenant); // Output: Dan

const secondTenantRooms = building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0];
console.log(secondTenantRooms); // Output: 4


const sarahRent = building.numberOfRoomsAndRent.sarah[1]; // 990
const davidRent = building.numberOfRoomsAndRent.david[1]; // 500
const danRent = building.numberOfRoomsAndRent.dan[1]; // 1000

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}

console.log(building.numberOfRoomsAndRent.dan[1]); // Output: 1200 (if the condition is true)

