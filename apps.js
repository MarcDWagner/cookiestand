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


let hours = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'];

function Store(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.totalCookiesEachHour = [];
  this.grandTotal = 0;
  allStores.push(this);
}

Store.prototype.saleEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let result = generateBetween(this.minCust, this.maxCust);
    let totalCookiesOneHour = result * this.avgSale;
    let roundedCookies = Math.round(totalCookiesOneHour);
    this.totalCookiesEachHour.push(roundedCookies);
    this.grandTotal += roundedCookies;
    console.log(this.grandTotal);
  }
};
Store.prototype.displaySales = function () {
  this.saleEachHour();
  let section = document.getElementById('salesperhour');
  let h2 = document.createElement('h2');
  h2.textContent = this.name;
  section.appendChild(h2);
  let ul = document.createElement('ul');
  section.appendChild(ul);
  for (let i = 0; i < this.totalCookiesEachHour.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${hours[i]}: ${this.totalCookiesEachHour[i]} cookies`;
  }
  let totalli = document.createElement('li');
  ul.appendChild(totalli);
  totalli.textContent = `Total = ${this.grandTotal}`;
};
function generateBetween(low, high) {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

let allStores = [];

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

// function cityData(data) {
//   salesTable.push(new Store(data.seattle, data.tokyo, data.dubai, data.paris, data.lima, data.grandTotal));
// }
// console.log(cityData);
// };
// };
// let seattle = {
//   name: 'Seattle Sales',
//   minCust: 23,
//   maxCust: 65,
//   avgSale: 6.3,
//   totalCookies: [],
//   grandTotal: 0,

// saleEachHour: function () {
// for (let i = 0; i < hours.length; i++) {
//   let result = generateBetween(this.minCust, this.maxCust);
//   let totalCookies = result * this.avgSale;
//   let roundedCookies = Math.round(totalCookies);
//   this.totalCookies.push(roundedCookies);
//   this.grandTotal += roundedCookies;
//   console.log(this.grandTotal);
// }
// },
//   displaySales: function () {
//     this.saleEachHour();
//     let section = document.getElementById('salesperhour');
//     let h2 = document.createElement('h2');
//     h2.textContent = this.name;
//     section.appendChild(h2);
//     let ul = document.createElement('ul');
//     section.appendChild(ul);
//     for (let i = 0; i < this.totalCookies.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${hours[i]}: ${this.totalCookies[i]} cookies`;
//     }
//     let totalli = document.createElement('li');
//     ul.appendChild(totalli);
//     totalli.textContent = `Total = ${this.grandTotal}`;
//   }
// };
// seattle.displaySales();



// let tokyo = {
//   name: 'Tokyo Sales',
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
//   totalCookies: [],
//   grandTotal: 0,
// }
//   saleEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let result = generateBetween(this.minCust, this.maxCust);
//       let totalCookies = result * this.avgSale;
//       let roundedCookies = Math.round(totalCookies);
//       this.totalCookies.push(roundedCookies);
//       this.grandTotal += roundedCookies;
//       console.log(this.grandTotal);
//     }
//   },
//   displaySales: function () {
//     this.saleEachHour();
//     let section = document.getElementById('salesperhour');
//     let h2 = document.createElement('h2');
//     h2.textContent = this.name;
//     section.appendChild(h2);
//     let ul = document.createElement('ul');
//     section.appendChild(ul);
//     for (let i = 0; i < this.totalCookies.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${hours[i]}: ${this.totalCookies[i]} cookies`;
//     }
//     let totalli = document.createElement('li');
//     ul.appendChild(totalli);
//     totalli.textContent = `Total = ${this.grandTotal}`;
//   }
// };
// tokyo.displaySales();

// let dubai = {
//   name: 'Dubai Sales',
//   minCust: 11,
//   maxCust: 38,
//   avgSale: 3.7,
//   totalCookies: [],
//   grandTotal: 0,
// }
//   saleEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let result = generateBetween(this.minCust, this.maxCust);
//       let totalCookies = result * this.avgSale;
//       let roundedCookies = Math.round(totalCookies);
//       this.totalCookies.push(roundedCookies);
//       this.grandTotal += roundedCookies;
//       console.log(this.grandTotal);
//     }
//   },
//   displaySales: function () {
//     this.saleEachHour();
//     let section = document.getElementById('salesperhour');
//     let h2 = document.createElement('h2');
//     h2.textContent = this.name;
//     section.appendChild(h2);
//     let ul = document.createElement('ul');
//     section.appendChild(ul);
//     for (let i = 0; i < this.totalCookies.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${hours[i]}: ${this.totalCookies[i]} cookies`;
//     }
//     let totalli = document.createElement('li');
//     ul.appendChild(totalli);
//     totalli.textContent = `Total = ${this.grandTotal}`;
//   }
// };
// dubai.displaySales();

// let paris = {
//   name: 'Paris Sales',
//   minCust: 20,
//   maxCust: 38,
//   avgSale: 2.3,
//   totalCookies: [],
//   grandTotal: 0,
// }
//   saleEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let result = generateBetween(this.minCust, this.maxCust);
//       let totalCookies = result * this.avgSale;
//       let roundedCookies = Math.round(totalCookies);
//       this.totalCookies.push(roundedCookies);
//       this.grandTotal += roundedCookies;
//       console.log(this.grandTotal);
//     }
//   },
//   displaySales: function () {
//     this.saleEachHour();
//     let section = document.getElementById('salesperhour');
//     let h2 = document.createElement('h2');
//     h2.textContent = this.name;
//     section.appendChild(h2);
//     let ul = document.createElement('ul');
//     section.appendChild(ul);
//     for (let i = 0; i < this.totalCookies.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${hours[i]}: ${this.totalCookies[i]} cookies`;
//     }
//     let totalli = document.createElement('li');
//     ul.appendChild(totalli);
//     totalli.textContent = `Total = ${this.grandTotal}`;
//   }
// };
// paris.displaySales();

// let lima = {
//   name: 'Lima Sales',
//   minCust: 2,
//   maxCust: 16,
//   avgSale: 4.6,
//   totalCookies: [],
//   grandTotal: 0,
// }
//   saleEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let result = generateBetween(this.minCust, this.maxCust);
//       let totalCookies = result * this.avgSale;
//       let roundedCookies = Math.round(totalCookies);
//       this.totalCookies.push(roundedCookies);
//       this.grandTotal += roundedCookies;
//       console.log(this.grandTotal);
//     }
//   },
//   displaySales: function () {
//     this.saleEachHour();
//     let section = document.getElementById('salesperhour');
//     let h2 = document.createElement('h2');
//     h2.textContent = this.name;
//     section.appendChild(h2);
//     let ul = document.createElement('ul');
//     section.appendChild(ul);
//     for (let i = 0; i < this.totalCookies.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${hours[i]}: ${this.totalCookies[i]} cookies`;
//     }
//     let totalli = document.createElement('li');
//     ul.appendChild(totalli);
//     totalli.textContent = `Total = ${this.grandTotal}`;
//   }
// };
// lima.displaySales();
