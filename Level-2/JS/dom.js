console.log("Website with JS");
/*

A Document object represents the HTML document that is displayed in that window. The Document object has various properties that refer to other objects which allow access to and modification of document content. The way a document content is accessed and modified is called the Document Object Model, or DOM.

*/
let a = document;
console.log(a);

// Extracting all Tags
a = document.all;
console.log(a);

// Body Tag
a = document.body;
console.log(a);

// Form tags
a = document.forms;
console.log(a);

a = document.all;

/*
a.forEach(function (element) {
    console.log(element);
})

It gives an error : a.forEach is not a function
*/

// HTML collecton --> Array
// Thus, it works fine

Array.from(a).forEach(function (element) {
    console.log(element);
});

// for Links
a = document.links;
console.log(a);

// The 1st tag which has a link
b = document.links[0];
console.log(b);

// The 1st link
c = document.links[0].href;
console.log(c);

// Printing all links in console
a = document.links;
Array.from(a).forEach(function (element) {
    console.log(element.href);
});

// Displaying all the image sources
a = document.images;
Array.from(a).forEach( function (element)
{
    console.log(element.src);
});

// Displaying the script sources
a = document.scripts;
Array.from(a).forEach(function (element){

    console.log(element.src);
});


// Question :: If from a bunch of links, if it contains a certain text, then print the link in the console

console.log("Excersise !!");
a = document.links;
Array.from(a).forEach(function (element){
    let str = element.toString();
    if( str.includes('google'))
    {
        console.log(str);
    }
    else{
        console.log("Correct");
    }
});