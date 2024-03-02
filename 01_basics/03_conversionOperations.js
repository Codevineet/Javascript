let score = undefined;
//score = null --> 0
//score = 33 --> nuumber
//score = "33abc" --> NaN
//score = undefined --> NaN
//score = true --> Number 1;

//console.log(typeof score);
let valueInNumber = Number(score);
//console.log(valueInNumber);
//console.log(typeof valueInNumber);



let isLoggedIn = 0;

/*
1 -> true;
0 -> false;
empty string "" -> false;
string "abx" -> true;
Null, NaN, undefined -> false;
*/ 
let answer = Boolean(isLoggedIn);
//console.log(answer);
//console.log(typeof answer);


let someNumber =  undefined;
/*
any number = 2233 -> string
NaN, undefined , Null -> string
*/

let someNumberToString = String(someNumber);
// console.log(someNumberToString);
// console.log(typeof someNumberToString);


//*******arithimatic operations************* 
let value = 3;
value = -value;
console.log(value);


let str1 = "Hello";
let str2 = "Vineet";

console.log(str1+" " +str2);
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");