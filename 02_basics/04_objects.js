//singleton object
const user = new Object();

//non singleton object
const user2 = {};


//we will be doing everthing on singleton object
user.name = "Vineet Jindal";
user.id = "123ab";
user.isLoggedIn = false;

//passing a object in the object
user.address = {
    add1:"shastri nagar",
    add2: "Tri nagar",
}

// console.log(user.address.add1);

//now merging to objects
const obj1 = {
    1: 1,
    2:2,
    3:3
}

const obj2 = {
    4:4,
    5:5,
}

// const obj3 = Object.assign({} , obj1 , obj2);
const obj3 = {...obj1 , ...obj2};
// console.log(obj3);

const emails = [
    {
        id:"1",
        name:"harsh"
    },
    {
        id:"2",
        name:"Vineet",
    }
]

// console.log(emails[0].id);

// console.log(Object.keys(user));
// console.log(Object.values(user));

const course = {
    name:"Js in Hindi",
    cost:999,
    instructorName:"Vineet Jindal",
}

//this is called as destructuring.
const {name , cost , instructorName} = course;
console.log(cost);

