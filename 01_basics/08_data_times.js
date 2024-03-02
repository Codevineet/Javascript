const myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 5);
console.log(myCreatedDate.toLocaleDateString());

let myTime = Date.now();
console.log(myTime);

console.log(Math.floor(Date.now()/1000));

console.log(myDate.toLocaleString('default' , {
    weekday: "long",
    month: "long"
}))