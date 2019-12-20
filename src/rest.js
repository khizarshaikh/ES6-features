/**
 * Example for Rest operator as function parameter
 * @param param1 normal param
 * @param param2 param using Rest operator
 */
function restOperator(param1, param2, ...param3) {
  console.log(param1);
  console.log(param2);
  console.log(param3);
}

restOperator("test", 123, [1, 2, 3, 4, 6], { p1: 1, p2: 2 });

function fun(...input) {
  let sum = 0;
  for (let i of input) {
    sum += i;
  }
  return sum;
}

console.log(fun(1, 2)); // 3
console.log(fun(1, 2, 3)); // 6
console.log(fun(1, 2, 3, 4, 5));
