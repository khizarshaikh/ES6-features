/***************************************************
 * How spread can be used to set multiple properties
 */

// Old way
// let x = 1;
// let y = 2;
// let z = 3;
// let x = 1, y = 2, z = 3;

let { x, y, z } = { x: 1, y: 2, z: 3 };
console.log("{ x, y, z } => ", x, y, z);

let { p, q, r } = { q: 10, p: 20, r: 3 };

let [h, i, j] = [100, 200, 300];
console.log("[h, i, j] => ", h, i, j);

let [k, , m] = [11, 22, 33];
console.log("[k, , m] => ", k, m);

console.log("-----------------------------------");
const obj = {
  param1: "test 1",
  param2: "test 2",
  param3: "test 3",
  param4: "test 4"
  // param5: 'test 5',
};

let { param1, param2 } = obj;
console.log("{ param1, param2 } => ", param1, param2);
console.log("-----------------------------------");

// using destructuring in function arguments

// function usingDestructuring(param3, param4) {
//   console.log("Param3:", param3);
//   console.log("Param4:", param4);
// }

// usingDestructuring(obj);
