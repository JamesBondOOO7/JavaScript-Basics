// If Else Statement

console.log("If Else Statement");

let age = 20;

// This also executes the 1st if condition as it compares only the values
// age = '20';

if ( age == 20)
{
    console.log("Age is 20");
}
else if( age > 65)
{
    console.log("Age is greater than 65");
}
else
{
    console.log("Age is not 20");
}

//  ' === ' operator :: type should also be equal

age = '20';
if ( age === 20)
{
    console.log("Age is 20");
}
else if( age > 65)
{
    console.log("Age is greater than 65");
}
else
{
    console.log("Age is not 20");
}

// ==  :: compares the values
// === :: == + type
// !=  :: comparision
// !== :: != + type


// To check whether a variable is defined or not

if(typeof vari !== 'undefined')
{
    console.log("Vari is defined")
}
else
{
    console.log("Vari is not defined");
}


// *************************************************

const doesDrive = true;

if( doesDrive && age >= 18)
{
    console.log("You can drive");
}

else
{
    console.log("You can't drive");
}

// TERNARY OPERATORS
age = 20;
console.log( age == 20 ? 'Age is 20' : 'Age is not 20');

// Switch Case Statements
// age = '20' and age = 20 gives different outputs !!
age = '20';
switch (age) {
    case 18:
        console.log("Age is 18");
        break;
    
    case 20:
        console.log("Age is 20");
        break;

    default:
        console.log("Dunno Man");
        break;
}