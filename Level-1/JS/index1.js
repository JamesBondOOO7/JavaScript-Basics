console.time('Your code took');

console.log("Hello Console");
console.log(22/7);
console.log(1681);
console.log(true);
console.log([1,2,3,4]);

// JS objects
console.log(
    {name : "Manan", marks : 80}
);

console.table(
    {name : "Manan", marks : 80},
    {name : "James", marks : 70}   
);

console.warn("This is a warning !!");

// console.clear();

console.timeEnd('Your code took');

console.assert(200 < 119, 'This is not possible');