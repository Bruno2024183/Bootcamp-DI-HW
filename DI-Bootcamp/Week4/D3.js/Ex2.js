// Stock and prices objects
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}; 

// Shopping list array
const shoppingList = ["banana", "orange", "apple"];

// Function to calculate the total bill
function myBill() {
    let total = 0;

    // Loop through each item in the shopping list
    for (let item of shoppingList) {
        // Check if the item is in stock and has a positive stock count
        if (item in stock && stock[item] > 0) {
            // Add the price of the item to the total
            total += prices[item];

            // Decrease the stock of the item by 1
            stock[item] -= 1;
        }
    }

    // Return the total bill
    return total;
}

// Call the myBill function and log the result
const totalBill = myBill();
console.log("Total bill:", totalBill);

// Optional: Display updated stock after shopping
console.log("Updated stock:", stock);
