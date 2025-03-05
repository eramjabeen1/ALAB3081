// numbers we are working with
const milesTotal = 1500;
const budget = 175;
const fuelPrice = 3;

// fuel for different speeds
const mpg55 = 30;
const mpg60 = 28;
const mpg75 = 23;

// create func that calculates fuel cost and time
function tripInfo(speed, mpg) {
    let fuelNeeded = milesTotal / mpg; //amount of gallons need
    let fuelCost = fuelNeeded * fuelPrice; //cost 
    let time = milesTotal / speed; //durantion of trip

    console.log(`With ${speed} mph:`);
    console.log(`Fuel should be: ${fuelNeeded.toFixed(2)} gallons`);
    console.log(`The cost is: $${fuelCost.toFixed(2)}`);
    console.log(`Duration of your trip is: ${time.toFixed(2)} hours`);
    console.log(`Your budget is ${fuelCost <= budget ? "enough" : "not enough"}.\n`);
}

// comparing all three trips here
tripInfo(55, mpg55);
tripInfo(60, mpg60);
tripInfo(75, mpg75);
