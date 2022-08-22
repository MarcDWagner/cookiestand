// Generating random numbers
function generateRandomNumber(highValue) {
    return Math.floor(Math.random() * (highValue + 1));
}

function generateBetween(low, high) {
 return Math.floor(Math.random() * (high - low + 1)) + low;
}

console.log(generateBetween(5,20));

// Calculate the average number of cookie sales per hours, per store.
// Think of each store as an object.
// What are the store hours?
// For a single hour, generate the number of sales using min/max customers per hour, average cookie sales per customer
// For each store, get an array of cookie sale data for each hour the store is open.
// Use 'this' keyword
// Here's the store hours, here's my values for cookie sales