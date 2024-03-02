let arr = [1, 2, 3];
let arr2 = [4,5, 6];
// console.log(arr.push(arr2));
console.log(arr.concat(arr2));


//This is the spread function eg - it we throw a glass from a height it will break and spread.
const new_array = [...arr, ...arr2];

//flat function
const x = [1,2,3,[2,3,4, [1,2,3]], 5,6, 7];
const y = x.flat(Infinity);
console.log(y);