console.log("Events and Event Objects");


// EVENT LISTENERS MAKE THE PAGE INTERACTIVE


// It will track and print on the console whenever we " CLICK " on the element which has an id = heading

// Other Events like " mouseover " :: action based on the evnet when the mouse is there over the specified element

document.getElementById('heading').addEventListener
('click', function(e) {

    console.log("You have clicked the heading");

    /* Suppose we want to direct the person when he clicks on this to some web page

    location.href = 'https://www.google.com';
    */


    // Printing the event Object
    console.log(e);


    // e object has many attributes
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.classList);

    console.log(e.target.id);

    console.log("FOR EACH ON CLASS LIST");
    arr = Array.from(e.target.classList);
    arr.forEach(element => {
        console.log(element);
    });

    // Offset : The distance from the position relative to the element, at which we have clicked.
    console.log(e.offsetX);
    console.log(e.offsetY);

    // Client : wrt to the browser
    console.log(e.clientX);
    console.log(e.clientY);
});

