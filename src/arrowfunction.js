// Several examples of arrow functions in ES6

// normal functions

// function sum(a, b) {
//   return a + b;
// }

// function printMessage() {
//   return "hey";
// }

// ES6 arrow function
const sum = (a, b) => a + b;

let printMessage = () => {
  return "hey";
};

// output (in console)
console.log("sum " + sum(6, 2));
console.log(printMessage());

// old way
// let lordify = function(firstName, land) {
//   if (!firstName) {
//     throw new Error("A firstName is required to lordify");
//   }
//   if (!land) {
//     throw new Error("A lord must have a land");
//   }
//   return `${firstName} of ${land}`;
// };

// // New
// let _lordify = (firstName, land) => {
//   if (!firstName) {
//     throw new Error("A firstName is required to lordify");
//   }
//   if (!land) {
//     throw new Error("A lord must have a land");
//   }
//   return `${firstName} of ${land}`;
// };

// console.log(lordify("Kelly", "Sonoma")); // Kelly of Sonoma
// console.log(lordify("Dave"));
