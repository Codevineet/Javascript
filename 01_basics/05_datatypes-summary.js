// Primitive datatypes:

// 7 types - Number, Symbol, Boolean, Undefined, Null, Symbol, BigInt

const id = Symbol('123');
const secondId  = Symbol('124');
// console.log(id === secondId);

// Reference type - non Primitive datatypes:

//Array, Objects, Functions.

let arr = [1, 2, 3, 4, 5, 6];

let myobj = {
    name:"Vineet",
    age:20
};

function getname(){
    console.log("Vineet Jindal");
}

console.log(typeof(12345678n));
console.log(typeof arr);
console.log(typeof getname);


//Memory

//stack memory (primitive type) -> copy element
// heap memory (no primitive type) -> orginial element

