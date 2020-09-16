// Type Conversion and Type Coercion

console.log("Type Conversion and Type Coercion");

let myVar;
myVar = 34;
console.log(myVar, typeof myVar);

// Number --> String
myVar = String(myVar);
console.log(myVar, typeof myVar);

let booleanVar = true;
console.log(booleanVar, typeof booleanVar);

// Boolean --> String
booleanVar = String(true);
console.log(booleanVar, typeof booleanVar);

let date = new Date();
console.log(date, typeof date);

// Date --> string
date = String(new Date());
console.log(date, typeof date);

let arr = [1,2,3,4,5];
console.log(arr, arr.length, typeof arr);

// Array --> String
arr = String(arr);
console.log(arr, arr.length, typeof arr);

// Array length :: Number of elements in an array
// String length :: length of the string or number of characters


// toString() :: converts to the string !!
let i = 8;
console.log(i.toString());

i = true;
console.log(i.toString());

i = new Date();
console.log(i.toString());


// Number :: converts into Number

let str = "1234";
console.log(str, typeof str);

str = Number(str);
console.log(str, typeof str);

str = Number("123abc567");
console.log(str, typeof str);


// true : 1
// false : 0
str = Number(true);
console.log(str, typeof str);

str = [1,2,3,4,5,6,7];
str = Number(str);
console.log(str, typeof str);


// ParseInt :: Integer

let num = parseInt('7.09782');
console.log(num, typeof num);


// ParseFloat :: Float

num = parseFloat('7.09782');
console.log(num, typeof num);

// toFixed

console.log(num.toFixed(2), typeof num);


// Type Coercion

let mystr = "569";
let mynum = 78;

console.log(mystr + mynum);
// Integer --> String :: Thus concatenates

