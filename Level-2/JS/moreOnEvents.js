console.log("More On Events");

let btn = document.getElementById('btn');
btn.addEventListener('click', func1);


function func1(e) {
    console.log("Thanks", e);
    console.log(e);
}

let bts = document.getElementById('bts');
bts.addEventListener('click', func2);


// It's default behaviour is to submit and direct to the none.htm page.

function func2(e) {

    console.log("It's a single click",e);
    // We are stopping the default behaviour of the page of redirecting to the other page.
    // Thus, we will be able to see the console.
    e.preventDefault();
}


// DOUBLE CLICK EVENT
bts.addEventListener('dblclick', func3);

function func3(e) {
    console.log("It's a double click",e);
    e.preventDefault();
}


// MOUSE DOWN :: Includes left, right and the wheel click
// while the simple CLICK only includes the left click
bts.addEventListener('mousedown',func4);

function func4(e) {
    console.log("It's a MOUSE DOWN !!", e);
    e.preventDefault();
}


// MOUSE ENTER :: If the mouse enters a particular element, then it is tracked

document.querySelector('.no').addEventListener
('mouseenter', function () {
   
    console.log("You entered the div 1 element");
});


// MOUSE LEAVE :: If the mouse leaves a particular element, then it is tracked

document.querySelector('.no').addEventListener
('mouseleave', function () {
   
    console.log("You exited the div 1 element");
});


// MOUSE MOVE :: tracks mouse movement

document.querySelector('.container').addEventListener
('mousemove', function(e){
    console.log("You triggered Mouse Move event ");

    // Dynamic nature :: Example : we will change the background color using this teachnique continuously

    console.log(e.offsetX, e.offsetY);

    document.body.style.backgroundColor = `rgb(${e.offsetX + 30}, ${e.offsetY + e.offsetX}, ${e.offsetX + 30})`;
});