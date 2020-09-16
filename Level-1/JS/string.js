// Working with Strings

console.log("Strings in JS");

const name = "Manan";
const greeting = "Good Evening";
console.log(greeting + " " + name );

// conacat

let s1 = "Hello ";
s1 = s1.concat("World ", "My name"," is Manan.");
console.log(s1);
console.log(s1.length);
console.log(s1.toLowerCase());
console.log(s1.toUpperCase());

// Indexing

console.log(s1[0], s1[1]);

console.log(s1.indexOf('is'));
// Multiple :: 1st Occurence

// Indexing is always calculated from left !!
console.log(s1.lastIndexOf('is'));

console.log(s1.charAt(4));

console.log(s1.endsWith("World"));

console.log(s1.includes('Manan'));

console.log(s1.substring(0,7));

console.log(s1.slice(6,11));

console.log(s1.split(' '));

// Replaces the 1st occurrence
console.log(s1.replace('Manan.','James.'));

// Template Literals

let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
    <h1> Thus is heading </h1>
    <p>You like ${fruit1} and ${fruit2} </p>`

document.body.innerHTML = myHtml;