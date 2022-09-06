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


let allStores = [];
let hours = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'];

function Store(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.totalCookiesEachHour = [];
  this.grandTotal = 0;
  this.displaySales();
  allStores.push(this);
}


Store.prototype.saleEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let result = generateBetween(this.minCust, this.maxCust);
    let totalCookiesOneHour = result * this.avgSale;
    let roundedCookies = Math.round(totalCookiesOneHour);
    this.totalCookiesEachHour.push(roundedCookies);
    this.grandTotal += roundedCookies;
    // console.log(this.grandTotal);
  }
};
Store.prototype.displaySales = function () {
  this.saleEachHour();
  let tableBody = document.getElementById('allStores');
  let tr = document.createElement('tr');
  let row = document.createElement('tr');
  tr.textContent = this.name;
  row.appendChild(tr);
  tableBody.appendChild(tr);

  // let th = document.createElement('th');
  // th.textContent= this.name;
  // tr.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    let cell = document.createElement('td');
    cell.textContent = `${this.totalCookiesEachHour[i]}`;
    tr.appendChild(cell);
    // cell.appendChild('td');
  }
  let totalCell = document.createElement('td');
  tr.appendChild(totalCell);
  totalCell.textContent = `${this.grandTotal}`;
};

function generateBetween(low, high) {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

let hoursRow = function () {
  let thead = document.getElementById('hours');
  let tr = document.createElement('tr');
  thead.appendChild(tr);
  let th = document.createElement('th');
  th.textContent = '';
  tr.appendChild(th);
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('th');
    td.textContent = hours[i];
    tr.appendChild(td);
  }
  let td = document.createElement('th');
  td.textContent = ('Daily Total Sales');
  tr.appendChild(td);
};

function generateFooter() {
  let table = document.getElementById('grandTotal');
  let row = document.createElement('tr');
  let head = document.createElement('th');
  head.textContent = 'Total Sales';
  row.appendChild(head);
  table.appendChild(row);
  for (let hour in hours) {
    let salesAtHour = 0;
    let cell = document.createElement('td');
    for (let store in allStores) {
      let currentStore = allStores[store];
      let currentSales = currentStore.totalCookiesEachHour[hour];
      salesAtHour += currentSales;
    }
    cell.textContent = salesAtHour;
    row.appendChild(cell);
    // console.log(`Sales at ${hours[hour]} : ${salesAtHour}`);
  }
  let cell = document.createElement('td');
  let totals = 0;
  for (let store of allStores) {
    totals += store.grandTotal;
  }
  cell.textContent = totals;
  row.appendChild(cell);
}

hoursRow();
new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);
generateFooter();

let formEl = document.getElementById('new-location');

formEl.addEventListener('submit', function (event) {
  event.preventDefault();
  let newLocation = event.target.name.value;
  let minCust = event.target.minCust.value;
  let maxCust = event.target.maxCust.value;
  let avgSale = event.target.avgSale.value;
  // console.log('Form values on submit', newLocation, minCust, maxCust, avgSale);
  new Store(newLocation, minCust, maxCust, avgSale);

  console.log('form submitted');
  document.getElementById('generateFooter').textContent = '';
  generateFooter();
  document.getElementById('new-location').reset();

});

//   allStores.push(addedStore);
//   console.log(allStores);
// let allStoresEl = document.getElementById('allStores');
// allStoresEl.innerHTML = '';

// new Store();
//use innerhtml to clear the form
// displaySales();
// generateFooter();
// addedStore.push(event);
// console.log(allStores);






// console.log(Store);

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
