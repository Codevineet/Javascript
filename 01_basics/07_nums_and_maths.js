const score = 400;
console.log(score);


//when we declear in this way. then its datatype is object
const num = new Number(400);
console.log(num);

console.log((num.toString()).length);
console.log(num.toFixed(3));


//precision has to be clear, because it priority before decimal.
const anotherNum = 349.9987;
console.log(anotherNum.toPrecision(4));

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));


//*********Maths ***************** */
// console.log(Math);
// console.log(Math.abs(-89)); //it just convert the negative values to positive
// console.log(Math.round(4.5));  //if <= 0.4 -> 4  and >= 0.5 -> 5.
// console.log(Math.ceil(4.2)); // choose the higer value;
// console.log(Math.floor(4.9)); //choose the lower value;
// console.log(Math.min( 4, 5, 6, 7));  

console.log( Math.round(6 * Math.random() + 1));

//if we have to get a number in a range
const mini = 20;
const maxi = 40;

console.log(Math.floor(Math.random() * (maxi - mini + 1) + mini));