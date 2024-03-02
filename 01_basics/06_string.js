let namee = "Vineet";
let repoCount = 50

//now we use placeholders

console.log(`My name is ${namee} and my repo count is ${repoCount}`);

let gameName = new String("Jindal-jin");
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('a'));


const newString = gameName.substring(1, 3);
console.log(newString);

//we can pass negative values in slice function
const anotherString = gameName.slice(-6, 6);
console.log(anotherString);


const newStringOne = "   Vineet      ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vineet-jindal.com";

console.log(url.replace('.com' , '.edu'));
console.log(url.includes('vineet'));

//converting into array
console.log(gameName.split('-'));