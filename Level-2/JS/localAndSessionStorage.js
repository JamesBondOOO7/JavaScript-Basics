console.log("Local And Session Storage");

/*

Local Storage : stores data with no expiration date.

Session Storage : stores data for one session ( i.e data is lost when the browser tab is closed )

Storage involves the saving of Key - Value pairs.
*/

console.log("LOCAL STORAGE");

// setItem : adds a key value pair inside the locla storage
localStorage.setItem('Name1', 'Manan');
localStorage.setItem('Name2', 'James');


console.log(localStorage.Name1);
console.log(localStorage.ABCD); // gives undefined


// getItem : retrieve an item from the local storage
let name = localStorage.getItem('Name2');
console.log(name);
console.log(localStorage.getItem('ABCD')); // gives null


// clearing local storage
// localStorage.clear();


// removing an item from the local storage
localStorage.removeItem('Name1');


// How to store Array in local storage

// If we try to store any array in local storage then it gets
// converted to String

let arr = ["Manan", "James", "Mission"];

localStorage.setItem('Imp', arr);
console.log(localStorage.getItem('Imp') , 'is of type', typeof localStorage.getItem('Imp'));


// Converting an array to String using JSON
// JSON.stringify()
localStorage.setItem('Imp', JSON.stringify(arr));

// This is a string while accessing
console.log(localStorage.getItem('Imp'));

// Converting it back to an array using JSON
// JSON.parse()
console.log(JSON.parse(localStorage.getItem('Imp')));
console.log(typeof JSON.parse(localStorage.getItem('Imp')));


console.log("SESSION STORAGE");
sessionStorage.setItem('temp1', "Hello");
sessionStorage.setItem('temp2', "World");

console.log(sessionStorage.getItem('temp1'));

sessionStorage.setItem('temp3', JSON.stringify(arr));

console.log(JSON.parse(sessionStorage.getItem('temp3')));

// clear session storage
sessionStorage.clear();