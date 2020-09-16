// Arrays

console.log("Arrays");

const marks = [40, 50, 75, 90, 88, 82];

const fruits = ["Orange", "Apple", "Banana"];

const mixed = ['James', 84, [4,5]];

const arr = new Array(22, 69, 21, "Hello World");

console.log(marks[4]);
console.log(fruits[1]);
console.log(mixed[2]);
console.log(arr);


// Property
console.log(arr.length);

// Method
console.log(Array.isArray(arr));
console.log(Array.isArray("Hello"));

arr[0] = "James";
console.log(arr);
let element = arr[0];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");


console.log(marks);
let value = marks.indexOf(75);
console.log(value);

// Mutating or Modifying Arrays

// Push :: adds the element at the end of the array
marks.push(100);
console.log(marks);

// Unshift :: adds the element at the start of the array
marks.unshift(69);
console.log(marks);

// Pop :: removes the element from the end
marks.pop();

// Shift :: removes the element from the start
marks.shift()

console.log(marks);

// Splice :: Removes the element from index 2 to 4
// marks.splice(2, 4);
// console.log(marks);


// reverse
marks.reverse()
console.log(marks);

// concat
let marks1 = [44,55,66,77];
let marks2 = [59, 69, 79, 89];
marks3 = marks1.concat(marks2);

// This statement is not possible as marks is const !!
// marks = marks.concat(marks2);

console.log(marks3);


// for key value pair
let myobj = {
    name: "James",
    channel: "JamesBond007",
    marks: [80,90,95,100]
}
console.log(myobj);
console.log(myobj.marks);
console.log(myobj.name);
console.log(myobj['channel']);
console.log(myobj['name']);