//singleton
//if we have to add a symbol in the object then use [] in the key and write the symbol name inside it
const mySym = Symbol("x");
const jsUser = {
    name: "Vineet",
    "full-name":"Vineet jindal",
    age:20,
    [mySym] : "lol",
    email: "jindal@gmail.com",
    isLoggedIn: false,
    lastLoggedIn : ["Monday" , "Tuesday"],
}



// console.log(jsUser.name);
// console.log(jsUser["full-name"]);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);
// console.log(jsUser);

const func = {
    greeting : function (){
        console.log("Hello there!!!");
    }
}

func.greeting2 = function (){
    console.log("Hello mates");
}

jsUser.greeting = function (){
    console.log(`welcome again ${this["full-name"]}`);
}

console.log(jsUser.greeting());
//


// console.log(func);
// console.log(func.greeting);
// console.log(func.greeting2());