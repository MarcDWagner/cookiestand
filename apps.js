'use strict';
// Generating random numbers

// function generateRandomNumber(highValue) {
//   return Math.floor(Math.random() * (highValue + 1));
// }


// Calculate the average number of cookie sales per hours, per store.
// Think of each store as an object.
// What are the store hours?
// For a single hour, generate the number of sales using min/max customers per hour, average cookie sales per customer
// For each store, get an array of cookie sale data for each hour the store is open.
// Use 'this' keyword
// Here's the store hours, here's my values for cookie sales

// let person = {
//   firstName: 'John',
//   lastName: 'Doe'
// };

// alert(person['firstName']);

let hours = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'];

let seattle = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
};
console.log(seattle);

function generateBetween(low, high) {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

function saleEachHour(low, high, average) {
  let result = generateBetween(low, high);
  let totalCookies = result * average;
  return Math.round(totalCookies);
}
console.log(saleEachHour(23, 65, 6.3));

for (let i = 0; i < hours.length; i++) {
  console.log(saleEachHour(26, 65, 6.3));
}
