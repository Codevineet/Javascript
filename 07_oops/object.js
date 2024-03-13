function multipleBy5(num){
    return num*5;
}

//at the end everything in the js is an object
//function is function as well object.
multipleBy5.prototype = 2;
// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

function createUser(username , count){
    this.username = username;
    this.count = count;
}

createUser.prototype.increment = function (){
    this.count++;
}

createUser.prototype.printMe = function (){
    console.log(`score is : ${this.count}`);
}

const chai = new createUser("chai" , 25);
const tea = new createUser("tea" ,10);

chai.printMe();
chai.increment();


/*
here's what happpens behind the scenes when the new keyword is used:

A new object is created" The new Keyword initiates the createion
of a new Js object.

A prototype is linked: The newly created object gets linked to the 
prototype property of the constructor function. This means that it has
access to properties and method defined on the constructor's prototype.

The constructor is called: The constructor function is 
called with the specifed arguments and this is bound to the newly c
created object. IF no explicit return value is specified fromt he constructor, js
assumes this, the newly created objec to be the intended return value.

*/



