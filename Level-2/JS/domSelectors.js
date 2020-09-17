console.log("DOM Selectors");
/*

Element Selectors :

1. Single Element Selector
2. Multi Element Selector

*/


// SINGLE ELEMENT SELECTORS

console.log("SINGLE ELEMENT SELECTORS");
let element = document.getElementById('first');
console.log(element);

// Class Name of the element
console.log("Class Name of the Element :",element.className);

// Child Node of the element
console.log("Child Nodes of the Element :", element.childNodes);

// Parent Node of the Element
console.log("Parent Node of the Element : ", element.parentNode);

// Changing the style of the element :: CSS Property
element.style.color = 'red';

// Changing the text of the element selected
element.innerText = "My name is Bond, James Bond";

// Changing the inner html of the element !!
element.innerHTML = "<b> Bond, James Bond </b>";

// Retrieving the inner html and inner Text
console.log(element.innerHTML,'\n', element.innerText);

// Query Selector
console.log("~~ Query Selector ~~");
// # : id
// . : class

let sel1 = document.querySelector('#first');
console.log(sel1);

// It returns the 1st element with class as 'child' (as it is a Single Element Selectors)
let sel2 = document.querySelector('.child');
console.log(sel2);

// Accessing directly through Tag
let sel3 = document.querySelector('b');
console.log(sel3);

// Selects the 1st div
let sel4 = document.querySelector('div');
sel4.style.color = 'green';
// 1st div elements turns green !


// MULTIPLE ELEMENT SELECTORS

console.log("MULTIPLE ELEMENT SELECTORS");

// Accessing multiple elements by class name
let elems1 = document.getElementsByClassName('child');
console.log("All Elements with class = child \n ", elems1);

// We can also access each element individually like:
console.log(elems1[2]);

// Container class and then select the elements with child class
elems1 = document.getElementsByClassName('container');
console.log(elems1[0].getElementsByClassName('child'));


// Accessing multiple elements by tag name

// All elements which have div tag
let elems2 = document.getElementsByTagName('div');
console.log(elems2);

/*
Now from this, we obtain a HTML collection.
And we cannot apply forEach function on collections.
Thus, we can convert it into array and do the specified task.
*/

console.log("for Each loop");
Array.from(elems2).forEach(function (element){

    console.log(element);
    // changing the color of each div element to blue !!
    element.style.color = 'blue';
});

// Doing the same with a for loop !
console.log("Simple for loop")
for (let index = 0; index < elems2.length; index++) {
    const element = elems2[index];
    console.log(element);
    element.style.color = 'green';
}