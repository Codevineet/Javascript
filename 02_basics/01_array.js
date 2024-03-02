const arr = [0, 1, 2, 3, 4, 6, "Hitest" , true];

console.log(arr.length);

arr.push(20);
console.log(arr);

arr.unshift(55);
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.includes(8));
console.log(arr.indexOf(3));


//slice and splice

console.log("A " , arr);
const newArr = arr.slice(1, 3);
console.log(newArr);

console.log("B " , arr);
const newArr2 = arr.splice(1, 3);
console.log(newArr2);
// console.log(arr);