// Functions

function greet1(name) {
    console.log(`Happy Birthday ${name}`);
}

console.log("Functions");

let name1 = "Don";
greet1(name1);

let name2 = "James";
greet1(name2);

// Function with return values

function greet2(name)
{
    console.log(`Happy Birthday ${name}`);
    return "ABCD";
}

let retval = greet2(name1);
console.log(retval);

// Function with default values

function greet3(name, thank="Thank you")
{
    console.log(`Happy Birthday ${name} \n 
    ${thank}`);
}

greet3(name2);

// Function --> as a variable

const mygreet = function(name, thank="Thank you"){

    let msg = `Happy Birthday ${name} \n 
    ${thank} !!`;

    return msg;
}

mymsg = mygreet(name2);
console.log(mymsg);

const myobj = {
    name : "James",
    game : function(){
        return "GTA";
    }
}
console.log(myobj.game());

// Scope

// var       :: global scope
// const/let :: block scope
var i = 234;
console.log(i);

function ui(name)
{
    let i = 9;
    console.log(i);
    i = 5;
    console.log(i);
    return `This is ${name}'s ui`;
}

console.log(ui("Manan"), i);

i = 900;

function vi(name)
{
    var i = 9;
    console.log(i);
    i = 5;
    console.log(i);
    return `This is ${name}'s vi`;
}

console.log(vi("Manan"), i);