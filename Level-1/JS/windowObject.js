// Window Object in JS

console.log("Window Object in JS");
/*

let a = window;

console.log(a);

// alert msg
alert("Hello Manan !!");

// Prompt :: takes input
a = prompt("Your Nickname please !!");
console.log(a);

// Confirm :: true/false
a = confirm("Are you sure you wanna submit this ?");
console.log(a);

~~~ This tech is old ~~~
~~~ We use DOM ~~~
 */

let a = window.document;
// This contains all the html code !!
console.log(a);

h = window.innerHeight;
w = window.innerWidth;

console.log(`Window = ( ${h} X ${w} )`);

// Note : window object is a global object
// Thus, all these functions work perfectly

h = innerHeight;
w = innerWidth;

console.log(`Window = ( ${h} X ${w} )`);

// Capturing Scrolling
// ScrollX :: Scrolling in X
// ScrollY :: Scrolling in Y
console.log("Scroll in x :",scrollX);
console.log("Scroll in y :",scrollY);

let b = location;
console.log(b);

// location.reload(); :: reloads the page continuously !!
// rather type it in the console once

// location.href = 'https://google.com';
// transfers to the specified url

let hist = history;
console.log(hist);