// DOM Traversing
console.log("DOM Traversing");

let cont1 = document.querySelector('.no');
console.log(cont1);

// Child Nodes of the container element
// It also includes the comments, new lines etc.
let cont2 = document.querySelector('.container');
console.log(cont2.childNodes);

// If we don't want the comments and stuff like that
console.log(cont2.children);

/*
    childNodes : shows everything 
    children   : shows imp stuff like tags n all
*/

// Printing Node Name and Node Type
let NodeName = cont2.childNodes[1].nodeName;
let NodeType = cont2.childNodes[1].nodeType;

console.log(NodeName);
console.log(NodeType);

/* Node Types

1  - element
2  - attribute
3  - Text Node
8  - Comment
9  - Document
10 - DocType

*/

for (let index = 0; index < cont2.childNodes.length; index++) {

    let NodeName = cont2.childNodes[index].nodeName;
    let NodeType = cont2.childNodes[index].nodeType;

    console.log(NodeType , " : " , NodeName);
    
}

// Digging Deep into Child Nodes

// div with class = container
let container = document.querySelector('div.container');

console.log(container);
console.log(container.children);
console.log(container.children[1]);
console.log(container.children[1].children);
console.log(container.children[1].children[0]);
console.log(container.children[1].children[0].children);

// childNodes[0]
console.log(container.firstChild);

// children[0]
console.log(container.firstElementChild);

// last childNode
console.log(container.lastChild);

// last children
console.log(container.lastElementChild);

// children count
console.log(container.childElementCount);

console.log(container.firstElementChild.parentNode);

// Next Child Node sibling
console.log(container.firstElementChild.nextSibling);

// Next Children sibling :: ELement
console.log(container.firstElementChild.nextElementSibling);

// Next
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);