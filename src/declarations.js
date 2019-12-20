//  usecase with var

var one = 1;
console.log("Printing variable one:\n", one);

var two = "two";
console.log("Printing variable two:\n", two);

var address = {
  location: "valsad",
  pin: 396001
};
console.log("Printing variable address:\n", address);

var one = "one";
console.log("Printing reinitialised variable one:\n", one);

one = true;
console.log("printing agian one:\n", one);

// changing the value of  variable two from block code.
function func1() {
  two = 2;
  console.log("From inside of a function\n", two);
}
func1();

// use case with let

let greeting = "Hello";
if (true) {
  let greeting = "Inside of a block scope";
  console.log("from block scope:\n", greeting);
  //   let greeting = "redeclaring greeting";
  greeting = "i can reinitialise its value";
  console.log("reinitialising:\n", greeting);
}
console.log("Outside of a block scope:\n", greeting);

//use case with const

const pet = "dog";
// pet = "cat";
console.log("printing const pet:\n ", pet);
if (true) {
  const pet = "cat";
  console.log("From inside of block:\n", pet);
}
