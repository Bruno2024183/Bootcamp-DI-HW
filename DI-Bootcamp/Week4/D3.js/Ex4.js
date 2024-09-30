// Function to calculate the hotel cost
function hotelCost(nights) {
    // Validate that nights is a number and greater than 0
    while (isNaN(nights) || nights <= 0) {
        nights = promp("Please enter a valid number of nights you would like to stay:");
    }
    const costPerNight = 140;
    return nights * costPerNight;
}


// Function to calculate the plane ride cost
function planeRideCost(destinarion) {
    // Validate that the destination is a string and not empty
    while (! isNaN(destination) || destination.trim() === "") {
        destination = prompt("Please enter a valid destination:");
    }

    destination = destination.toLowerCase();
    if (destination === "london") {
        return 183;
    } else if (destination === "paris") {
        return 220;
    } else {
        return 300;
    }
}


// Function to calculate the car rentar cost
function rentalCarCost(days) {
    // Validate that days is a number and greater than 0
    while (isNaN(days) || days <= 0) {
        days = prompt("Please enter a valid number of days you would like to rent the car:");
    }

    const costPerDay = 40;
    let totalCost = days * costPerDay;

    // Apply a 5% discount if renting for more than 10 days
    if (days > 10) {
        totalCosto *= 0.95;
    }
    return totalCost;
}

// Function to calculate the total vacation cost
function totalVacationCost() {
    // Ask the user for the number of nights, destination, and rental days
    let nights = prompt("How many nights would you like to stay at the hotel?");
    let destination = prompt("What is your destination?");
    let days = prompt("How many days would like to rent the car?");
    
    // Calculate the individual costs
    const hotel = hotelCost(nights);
    const plane = planeRideCost(destination);
    const car = rentalCarCost(days);

    // Calculate the total cost
    const totalCost = hotel + plane + car;

    // Output the total cost
    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
    console.log(`The total vacation cost is: $${totalCost}`);
    return totalCost;
}

// Call the totalVacationCost function to excecute
totalVacationCost();