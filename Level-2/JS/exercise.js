console.log("EXERCISE");

/*

You have to create a div and inject it into the page which contains a heading.

Whenever someone clicks on the div. it should be converted into an editable item.

Whenever user clicks away ( Event Listener : blur ), save the node into the local storage.

*/

//  Creating an element
let divElem = document.createElement('div');

let text;

// Retreiving value from local storage
let val = localStorage.getItem('text');
if( val == null )
{
    // Default text to the new element
    text = document.createTextNode('This is my element. Click to edit it');
}
else
{
    text = document.createTextNode(val);
}
// Giving text to the new element
divElem.appendChild(text);

// Giving id, class and style to the new element
divElem.setAttribute('id','elem');
divElem.setAttribute('class','elem');
divElem.setAttribute('style','border: 2px solid black; width: 220px; margin: 34px; padding: 23px');

// The class of the tag under which the element is to be inserted
let container = document.querySelector('.container');

// The element before which the new element is to be inserted
let first = document.getElementById('first');

// Insert the element before the element with id first
container.insertBefore(divElem, first);

console.log(divElem, container, first);

// Adding an Event Listener

divElem.addEventListener('click', function(){

    let noOfTextAreas = document.getElementsByClassName('textarea').length;

    if( noOfTextAreas == 0)
    {
        let html = divElem.innerHTML;
        divElem.innerHTML = `<textarea class="textarea" id="textarea" rows="3">${html}</textarea>`;
    }

    // To save, we will use the blur event
    let textarea =  document.getElementById('textarea');
    textarea.addEventListener('blur',function(){

        divElem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    });
});