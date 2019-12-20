// Helper functions for Array
const colors = ["red", "green", "blue"];

//forEach
colors.forEach(element => {
  console.log("Elements in colors ", element);
  // if (element === "red") {
  //   break;
  // }
});

//for..in
for (const value in colors) {
  console.log("Using for...in", value);
  console.log(colors[value]);
  // if (colors[value] === "red") {
  //   break;
  // }
}

//for..of
for (const value of colors) {
  console.log("Using for..of", value);
  // if (value === "red") {
  //   break;
  // }
}
