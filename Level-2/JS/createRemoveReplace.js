console.log("Create, Remove and Replace Elements");

let element = document.createElement('li');

// Adding a class Name to this element
element.className = 'ulchild';

// Providing an id
element.id = 'createdLi';

// To give an attribute
element.setAttribute('title', 'mytitle');

// Adding text to the element
element.innerText = "New Element added Using JS. ";

element.style.color = 'blue';

console.log(element);

// Adding this element to DOM

// Retrieving the list in which the element is to be added with the help of query Selector
let ul = document.querySelector('ul.this');
console.log(ul);

// Appending the element in the DOM structure at a specified location
ul.appendChild(element);

// One more method to add Text in the element is to create a TextNode

let text = document.createTextNode("This is made using Text Node");
element.appendChild(text);


// Replacing ELements

let elem1 = document.createElement('h3');
elem1.id = 'elem1';
elem1.className = 'elem1';

// Adding a text node
let tnode1 = document.createTextNode("New Replaced Element :) ");
elem1.appendChild(tnode1);

element.replaceWith(elem1);


// Replacing the 1st child node of element with id = myul
let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));



// Removing Child;
myul.removeChild(document.getElementById('lui'));



// Retrieving Attributes

let ga = elem1.getAttribute('id');
console.log(ga);

ga = elem1.getAttribute('class');
console.log(ga);

// Checking for the presence of Attributes

let ha = elem1.hasAttribute('id');
console.log(ha);

ha = elem1.hasAttribute('href');
console.log(ha);



console.log(elem1);

// Removing Attributes

elem1.removeAttribute('id');
console.log(elem1);


// Set Attributes
elem1.setAttribute('height', 200);
console.log(elem1);

// Exercise

let elem2 = document.createElement('h2');
let txtnode = document.createTextNode("Go to Code With Harry");
elem2.id = "Heading";
elem2.className = "Heading";
elem2.appendChild(txtnode);

atag = document.createElement('a');
atag.setAttribute('href','https://www.codewithharry.com');
atag.id = "Anchor";
atag.className = "Anchor";
atag.innerText = "Harry.com";

console.log(elem2);
console.log(atag);

elem2.appendChild(atag);

doc = document.querySelector('body');
console.log(doc);

doc.appendChild(elem2);