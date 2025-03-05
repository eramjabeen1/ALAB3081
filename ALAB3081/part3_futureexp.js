// numbers we are working with to begin
const milesTotal = 1500;
const fuelPrice = 3;

const speeds = [55, 60, 75];
const mpgValues = [30, 28, 23];

// calcuator for euqation of time and speed cost
function tripCalculator(speed, mpg) {
    let gallons = milesTotal / mpg; // Fuel needed
    let cost = gallons * fuelPrice; // Fuel cost
    let time = milesTotal / speed; // Duration

    return { speed, gallons, cost, time };
}

//loops 
let bestSpeed = null;
let lowestCost = Infinity;

//checking speed loops
for (let i = 0; i < speeds.length; i++) {
    let trip = tripCalculator(speeds[i], mpgValues[i]);
    console.log(`At ${trip.speed} mph: Cost = $${trip.cost.toFixed(2)}, Duration of trip = ${trip.time.toFixed(2)} hrs`);
    
    // finding the most cheapest 
    if (trip.cost < lowestCost) {
        lowestCost = trip.cost;
        bestSpeed = trip.speed;
    }
}

//output the best speed
console.log(`If you want to save money drive ${bestSpeed} mph.`);
