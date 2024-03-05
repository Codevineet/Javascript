//for off loops basically prints the values 

const arr = [ 1,2 ,3, 4, 5];

for (const i of arr) {
    // console.log(i);
}


//maps -> have only unique key-value pairs
const map = new Map();
map.set('IN', 'India');
map.set('USA' , 'United States of America');
map.set('Fr' , 'France');
map.set('Fr' , 'France');
// console.log(map);

for (const [key , value] of map) {
    // console.log(key, value);
}

const games = {
    game1 : "Fifa",
    game2 : "f1",
    game3: "cricket",
}

// for (const [key , value ] of games) {
//     console.log(key , value);
// }

//the for of doesn't work on objects
//for in loop is workable on objects, it basically prints the keys, indexes 

for (const key in games) {
    // console.log(`${key} : ${games[key]}`);
}

for (const key in arr) {
    // console.log(key);
}


//for each loop is a high order functoin 
// arr.forEach(function (item) {
//     console.log(item);
// })

//using arrow function

arr.forEach( (item) =>{
    // console.log(item);
})


//using filter function
let result = arr.filter((num) => {
    return num > 4;
})

console.log(result);


//using map function 

const x = arr.map( (num) =>{
    return num = num + 10;
})

console.log(x);

//reduce function

const nums = [1,2 ,3, 4,5];
const total = nums.reduce((acc, currval) =>{
    console.log(`accumulator : ${acc} and Currentvalue : ${currval} total is ${acc + currval}`)
    return acc + currval;
} , 10)

console.log(total);