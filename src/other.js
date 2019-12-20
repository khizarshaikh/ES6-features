//  use with default function parameters

function myFunction(a, b = "Khizar") {
  console.log("A", a, " ", "B", b);
}

myFunction(1);

// exponentiation operator denoted by (**)

let x = 5;

//old way
// let y = Math.pow(x, 2);

//ES6 way
let y = x ** 2;
console.log("Square of", x, "is", y);

// Template string

let str = `Template literal in ES6`;
// let multiline_string =
//   "Hello!!!! \n welcome to 1Rivet \n Enjoy learning the cool features of javascript";

let multiline_string = `
    Hello!!!!
    welcome to 1Rivet
    Enjoy learning the cool features of javascript`;

const a = 25;
const b = 5;

console.log("Multiline string\n", multiline_string);
console.log("square of" + b + "is" + a);
console.log(`sqaure of ${b} is ${a} `);
