function changeEnough(itemPrice, amountOfChange) {
    // Assigning the coin values
    const quartersValue = 0.25;
    const dimesValue = 0.10;
    const nickelsValue = 0.05;
    const penniesValue = 0.01;

    // Calculating the total amount of change
    const totalChange = (amountOfChange[0] * quartersValue) +
                        (amountOfChange[1] * dimesValue) + 
                        (amountOfChange[2] * nickelsValue) +
                        (amountOfChange[3] * penniesValue);

    // Checking if the total change is enough to buy the item
    return totalChange >= itemPrice;
}


// Test cases
console.log(changeEnough)(4.25, [25, 20, 5, 0])); // Output: true
console.log(changeEnough(14.11, [2, 100, 0, 0])); // Output: false
console.log(changeEnough(0.75, [0, 0, 20, 5])); // Output:true