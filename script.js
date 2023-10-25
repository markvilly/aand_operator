"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    time = "20:00",
    address = "",
    mainIndex = 1,
    starterIndex = 1,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} by ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizzas: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

console.log("----- OR -----");

console.log(3 || "jonas"); // 3
console.log("" || "jonas"); // jonas
console.log(true || 0); // true
console.log(undefined || null); //undefined.

console.log(undefined || 0 || "" || "hello" || 23 || null);

// restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guests1);

const guests2 = restaurant.numGuests || 10;

console.log(guests2);

console.log("----- AND ----");

console.log(0 && "Jonas");
console.log(7 && "Jonas");
console.log("Hello" && 23 && null && "jonas");

if (restaurant.orderPizzas) {
  restaurant.orderPizzas("mushrooms", "spinach");
}

restaurant.orderPizzas && restaurant.orderPizzas("mushrooms", "spinach");

// Short-Circuiting with Variables: done
// Write a function that takes two arguments, a and b, and returns the value of b only if a is true. Ensure that the function doesn't throw any errors if a is false.

// Safe Array Access: done
// Create a function that takes an array and an index as arguments. The function should return the element at the given index if the index is within the bounds of the array (i.e., it's non-negative and not greater than or equal to the array's length). Implement this using short-circuiting.

// Conditional Function Call: done
// Write a function that takes a boolean value and a function as arguments. If the boolean is true, the function should be called. If the boolean is false, the function should not be called, and the function should return undefined.

// Safe Property Access:
// The Create a function that takes an object and a property name as arguments. function should return the value of the property if it exists in the object, and undefined if the property is not found. Use short-circuiting to implement this behavior.

// Conditional Execution:
// Write a function that takes a boolean condition and two functions as arguments. If the condition is true, execute the first function. If the condition is false, execute the second function. Make use of short-circuiting.

// Optional Function Parameters:
// Create a function that takes two numbers as arguments and an optional third function argument. If the third function argument is provided, call it with the first two numbers as parameters and return its result. If the third argument is not provided, return the sum of the two numbers.

//function that accepts an array and index as argument and returns the element from the given index, using short circuiting

const safeArr = function (arr, index) {
  return index >= 0 && index < arr.length && arr[index];
};

const myArray = [10, 20, 30, 40];

console.log(safeArr(myArray, 3));
console.log(safeArr(myArray, 5));

//conditional fucntional call

const funCall = function (bol, fun) {
  return bol && fun();
};

const sayHello = function () {
  return "Hello, world";
};

console.log(funCall(false, sayHello));

// conditional function call alternative approach.

const condFun = function (condition, func) {
  return condition ? func() : undefined;
};

console.log(condFun(false, sayHello));
console.log(condFun(true, sayHello));

// Safe Property Access:
// The Create a function that takes an object and a property name as arguments. function should return the value of the property if it exists in the object, and undefined if the property is not found. Use short-circuiting to implement this behavior.

const myObject = {
  name: "John",
  age: 30,
};

console.log(myObject["name"]);
