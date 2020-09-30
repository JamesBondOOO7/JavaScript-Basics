console.log("EXERCISE");

/*

You have to create a div and inject it into the page which contains a heading.

Whenever someone clicks on the div. it should be converted into an editable item.

Whenever user clicks away ( Event Listener : blur ), save the node into the local storage.

*/


document.getElementById('ulchild').addEventListener('click',function(){

    console.log("Hello");

    let ele = document.getElementById('ulchild');
    // let new_element = document.createElement('li');
    // new_element.className = 'ulchild';

    // // Adding a text area for input
    // let txt = document.createElement('textarea');
    // txt.className = 'this area';
    // txt.style = 'position:relative; margin-left:40%; mrgin-top:10%';
    // ele.appendChild(txt);

    // let notes = localStorage.getItem("this area");
    // console.log(notes);
});