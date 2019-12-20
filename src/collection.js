// // Maps
// // The Map object is a simple key/value pair. Keys and values in a map may be primitive or objects.

// var map = new Map();
// map.set(1, true);
// console.log(map.has("1")); //false

// map.set("1", true);
// console.log(map.has("1")); //true

// // The set() method is also chainable. Consider the following example.

// var roles = new Map();
// roles
//   .set("r1", "User")
//   .set("r2", "Guest")
//   .set("r3", "Admin");
// console.log(roles.has("r1"));

// //The get() function is used to retrieve the value corresponding to the specified key.
// var roles = new Map([
//   ["r1", "User"],
//   ["r2", "Guest"],
//   ["r3", "Admin"]
// ]);
// console.log(roles.get("r2"));

// // Note − The get() function returns undefined if the key specified doesn’t exist in the map.

// // The set() replaces the value for the key, if it already exists in the map. Consider the following example.

// var roles = new Map([
//   ["r1", "User"],
//   ["r2", "Guest"],
//   ["r3", "Admin"]
// ]);
// console.log(`value of key r1 before set(): ${roles.get("r1")}`);
// roles.set("r1", "superUser");
// console.log(`value of key r1 after set(): ${roles.get("r1")}`);

// var roles = new Map([
//   ["r1", "User"],
//   ["r2", "Guest"],
//   ["r3", "Admin"]
// ]);

// console.log("roles", roles);
// for (let [key, value] of roles.entries()) {
//   //   console.log(`${r[0]}: ${r[1]}`);
//   console.log(`${key}: ${value}`);
// }

// // Use Case with set

// // let set = new Set();
// // set.add("1");
// // set.add(5);
// // set.add({ fname: "Khizar", lname: "Shaikh" });
// // const k = { fname: "Khizar", lname: "Shaikh" };
// // set.add(k);

// // // console.log(set);
// // // console.log(set.has(1));
// // // console.log(set.has(k));
// // // console.log(set.has(Math.sqrt(25)));

// // for (let value of set) {
// //   //   console.log(`${r[0]}: ${r[1]}`);
// //   console.log(value);
// // }

// var library = [
//   {
//     title: "Bill Gates",
//     author: "The Road Ahead",
//     readingStatus: true
//   },
//   {
//     title: "Steve Jobs",
//     author: "Walter Isaacson",
//     readingStatus: true
//   },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     readingStatus: false
//   }
// ];

// console.log("library", library);

// for (let v of library) {
//   if (v.hasOwnProperty("readingStatus")) {
//     if (v.readingStatus) {
//       console.log(`${v.title}has already read the book`);
//     }
//     if (!v.readingStatus) {
//       console.log(`${v.title}is yet to read the book`);
//     }
//   }
// }

// var myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString());
// console.log(myColor.join());
// console.log(myColor.join("+"));

// str
//   .split("")
//   .reverse()
//   .join("");

var vowelsCount = 0;
var vowels = ["a", "e", "i", "o", "u"];

var str = "Today is best day of my life";

// for (let i = 0; i < str.length; i++) {
//   if (vowels.includes(str[i])) vowelsCount++;
// }

for (let s of str) {
  console.log(s);
  if (vowels.includes(s)) vowelsCount++; // ES2016 (ES7) syntax
}

console.log(vowelsCount);
