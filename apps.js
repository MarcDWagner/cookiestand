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

let seattle = {
  name: 'Seattle Sales',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  totalCookies: [],
  grandTotal: 0,

  saleEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let result = generateBetween(this.minCust, this.maxCust);
      let totalCookies = result * this.avgSale;
      let roundedCookies = Math.round(totalCookies);
      this.totalCookies.push(roundedCookies);
      this.grandTotal += roundedCookies;
      console.log(this.grandTotal);
    }
  },
  displaySales: function() {
    this.saleEachHour();
    let section = document.getElementById('salesperhour');
    let h2 = document.createElement('h2');
    h2.textContent = this.name;
    section.appendChild(h2);
    let ul = document.createElement('ul');
    section.appendChild(ul);
    for (let i = 0; i < this.totalCookies.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${hours[i]}: ${this.totalCookies[i]} cookies`;
    }
    let totalli = document.createElement('li');
    ul.appendChild(totalli);
    totalli.textContent = `Total = ${this.grandTotal}`;
  }
};
seattle.displaySales();

function generateBetween(low, high) {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

let tokyo = {
  name: 'Tokyo Sales',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  totalCookies: [],
  grandTotal: 0,

  saleEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let result = generateBetween(this.minCust, this.maxCust);
      let totalCookies = result * this.avgSale;
      let roundedCookies = Math.round(totalCookies);
      this.totalCookies.push(roundedCookies);
      this.grandTotal += roundedCookies;
      console.log(this.grandTotal);
    }
  },
  displaySales: function() {
    this.saleEachHour();
    let section = document.getElementById('salesperhour');
    let h2 = document.createElement('h2');
    h2.textContent = this.name;
    section.appendChild(h2);
    let ul = document.createElement('ul');
    section.appendChild(ul);
    for (let i = 0; i < this.totalCookies.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${hours[i]}: ${this.totalCookies[i]} cookies`;
    }
    let totalli = document.createElement('li');
    ul.appendChild(totalli);
    totalli.textContent = `Total = ${this.grandTotal}`;
  }
};
tokyo.displaySales();

let dubai = {
  name: 'Dubai Sales',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  totalCookies: [],
  grandTotal: 0,

  saleEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let result = generateBetween(this.minCust, this.maxCust);
      let totalCookies = result * this.avgSale;
      let roundedCookies = Math.round(totalCookies);
      this.totalCookies.push(roundedCookies);
      this.grandTotal += roundedCookies;
      console.log(this.grandTotal);
    }
  },
  displaySales: function() {
    this.saleEachHour();
    let section = document.getElementById('salesperhour');
    let h2 = document.createElement('h2');
    h2.textContent = this.name;
    section.appendChild(h2);
    let ul = document.createElement('ul');
    section.appendChild(ul);
    for (let i = 0; i < this.totalCookies.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${hours[i]}: ${this.totalCookies[i]} cookies`;
    }
    let totalli = document.createElement('li');
    ul.appendChild(totalli);
    totalli.textContent = `Total = ${this.grandTotal}`;
  }
};
dubai.displaySales();








