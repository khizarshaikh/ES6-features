// 1. Copying an array

var fruits = ["Apple", "Orange", "Banana"];

let newFruitArray = [...fruits];

console.log("Copied array", newFruitArray);

// 2. Concatenating arrays

let arr1 = ["A", "B", "C"];

let arr2 = ["X", "Y", "Z"];

let result = [...arr1, ...arr2];

console.log("Merged arr1 and arr2: ", result);

// 3. Spreading elements together with an individual element

var fruits = ["Apple", "Orange", "Banana"];

let newFruits = ["Cherry", ...fruits];

console.log("Spreaded elements", newFruits);

// 4. Spreading elements on function calls

var fruits = ["Apple", "Orange", "Banana"];

var getFruits = (f1, f2, f3) => {
  console.log("Fruits", f1, f2, f3);
};

getFruits(...fruits);

// 5. Spread syntax for object literals

let obj1 = { id: 101, name: "Jhon Doe" };

let obj2 = { age: 25, country: "USA" };

const employee = { ...obj1, ...obj2 };

console.log("Object Literals", employee);
