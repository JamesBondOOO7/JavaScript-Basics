// Variables in JS

console.log('Variables');

// var, let, const :: Variables are declared using this

// Variable declared with values
var name = "Manan";

// declaring a variable
var channel;
// channel = "James Bond"
console.log(name, channel);
// undefined ~ null

var marks = 88;
marks = marks + 2;
console.log("Marks =",marks);

var city = "Delhi";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Using const :: for constants
const ownersName = "Manan Arora";
console.log("Ownwer's name :", ownersName);

// constant variables can't be just declared
// They need to be initialzed !!
// This gives error :
// const fruit;


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// let :: block level scope
// var :: global scope

// Now, let is preferred !!

{
    let city = "Agra";
    // let variable :: more preferrence
    console.log(city);
}

// Global Scope; hence 
console.log(city);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const arr1 = [1,2,3,4,5];

arr1.push(-10)

console.log(arr1);

// We see that the const array gets updated 

// But we cannot perform this
// i.e. arr1 points to some new array !!
// arr1 = [4,5,6];