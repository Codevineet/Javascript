function userFunction(username, loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userone = new userFunction("Vineet Jindal" , 8, true)
const userTwo  = new userFunction("Harshit Jindal" , 8, true);
console.log(userone);

// if we don't use the new keyword then it will override the values 
// suppose userone has name as vineet Jindal and usertwo has name harshit harshitjindal
//just after the above statement we have ovveride the values. and if i print the userOne 
//without new keyword it will harshit jindal means it changes in orignal. if we use new keyword
//it will create a copy and pass to the another user.

