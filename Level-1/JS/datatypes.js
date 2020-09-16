// Primitive Datatypes

// String
var name = "Manan";
console.log("My string is "+ name);
console.log("The datatype is "+ (typeof name));

// Numbers
// marks is already declared in previous scripts
let marks_ = 88;
console.log("My marks are " + marks_);
console.log("The datatype is "+ (typeof marks_));

// Boolean

let isDriver = true;
console.log("The datatype is "+ (typeof isDriver));

// Null ( <- object )
let nullVar = null;
console.log("The datatype is "+ (typeof nullVar));

// Undefined
let undef = undefined;
console.log("The datatype is "+ (typeof undef));


// Reference datatype

myarr = [1,2,3,"James",4,5,6,false];
console.log(myarr)
console.log("The datatype is "+ (typeof myarr));

// Object literals

// Type : Object
let marks_list = 
{
    james: 88,
    renz: 85,
    stark: 80
}
console.log(marks_list);
console.log(typeof marks_list);


// Type : function
function findname() {
    
}

console.log(typeof findname);


// Type : Object
let date =  new Date();
console.log(typeof date);