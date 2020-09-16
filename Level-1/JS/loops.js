// Loops

console.log("Loops");

// For loop

console.log("for loop");
for( let i=0; i<10; i++)
{
    console.log(i);
}

// while loop

console.log("while loop");
let j = 0;
while( j< 10 )
{
    console.log(j);
    j++;
}

// do while loop

console.log("do while loop")
let k = 100;
do{
    console.log(k);
    k++;
} while(k<10);

// Break and Continue statement

console.log("Break and Continue Statement");
let l = 0;
while( l<10 )
{
    if( l===5 )
    {
        console.log("Break statement used");
        break;
    }

    if( l===2 )
    {
        console.log("Continue statement used");
        l++;
        continue;
    }
    console.log(l);
    l++;
}

// Iterating on arrays

console.log("Start");
let arr = [1,2,3,4,5,6,7,8,9,10];
arr.forEach(function(element) {
    console.log(element);
})

console.log("Done");

// Iterating on Objects

let obj = {
    name : "James",
    age: 20,
    type: "Coder",
    os: "Windows"
}

for( let key in obj )
{
    console.log(`${key} of object is ${obj[key]}`);
}

console.log("Start");
arr.forEach(function(element, index, array) {
    console.log(element, index, array);
})

console.log("Done");