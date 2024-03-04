const user = {
    name: "Vineet Jindal",
    age: 20,

    welcomeMessage : function(){
        console.log(`${this.name}, welcome to the website`)
    }
}


// console.log(user.welcomeMessage());

// const chai = function(){
//     let username = "Vineet Jindal";
//     console.log(this.username);
// }

// chai();
//giving undefined

// const chai = (num1 , num2) =>{
//     let username = "Vineet Jindal";
//     console.log(this);
//     return num1 + num2;
// }

const arrowFunction = (name) =>{
    return {myname: name};
}

console.log(arrowFunction('Vineet Jindal'));


//IIFE concept immediately Invoked Function Expression
//because of the global pollution and it may effect the other things, that's why we use IIFE

(function db(){
    //named IIFE
    console.log("DB is connected....")
})();

((name) =>{
    //unnamed IIFE
    console.log(`DB is connected ${name}`)
})("Mr. Vineet Jindal");


//checking object is empty or not
const x = {};

if(Object.keys(x).length === 0){
    console.log("object is empty");
}