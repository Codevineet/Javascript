let myName = "Vineet Jindal       ";

// console.log(myName.trueLength);


//we have to create a method which gives the 
//actual length of the string without using
//trim and length function 

let arr = [10, 20, 30];

let obj = {
    num1 :"ten",
    num2: "twenty",
    num3: "thirty",


    getnum1Value : function (){
        console.log(`Num1 value is : ${this.num1}`);
    }
}

//we can also add our owns functions inside the object prototype.
Object.prototype.vineet = function (){
    console.log('This is my project' );
}


Array.prototype.vineetj = function (){
    console.log(`This is only working on arrays`);
}


//the power is going to both object and arr
obj.vineet();
arr.vineetj();


//inheritance

const User = {
    name : "vineet",
    email: "vineet.Google.com",
}

const teacher = {
    makeVideo : true,
}


const teachingSupport = {
    isAvailable : false
}

//__proto__ is used to create the inheritance 
//like accessing the properties of teachingSupport.
const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__: teachingSupport
}

teacher.__proto__ = User;
//this is how we inherit the properties of User into teacher.
//but this is an outdated code


//modernSyntax
Object.setPrototypeOf(teachingSupport , teacher);
//now teaching support can access the properties of teacher.


let anotherName = "Vineet Jindal          ";
String.prototype.trueLength = function (){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`)
}

console.log(anotherName.trueLength());


console.log("Vineet jjjjjjjjjindal           ".trueLength());













