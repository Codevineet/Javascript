//promise function takes two parameters as a callback, the first one is resolve and the another one is
//reject,
//resolve and reject states that if our request eg - if we are fetching the data from a API
// it our promise function is able to fetch it then it is resolved, else rejected.


//********************************ONE************************************ */

const promiseOne = new Promise(function (resolve, reject) {
  //do async tasks
  //DB call, cryptography, network call
  setTimeout(function () {
    // console.log("hello world");
    resolve();
  }, 2000);
});

//now consuming the promiseOne
//.then has a direct connection with the resolve.
//.then also takes a function and returns the value that it got from the promises.
promiseOne.then(function () {
//   console.log("promised consumed");
});

//*********************************TWO************************************* */

new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("This is the second way of writing the promise");
    resolve();
  }, 1000);
}).then(function () {
//   console.log("The promise has been completed");
});

//*******************************THREE********************************************** */

const promiseThird = new Promise((resolve, reject) => {
  //how to pass values from here to the then function . it is done by resolve function , it takes/
  // paramters (mostly its a object) that are going to pass in the .then fnc.
  setTimeout(function () {
    const name = "Vineet Jindal";
    resolve({ name: `${name}`, email: "vineetjindal09@gmail.com" });
  }, 1000);
});

//here in the function we have an argument, user. which has a object passed by resolve function.
promiseThird.then(function (user) {
//   console.log(user.name);
});

//********************************FOUR**************************************** */

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Vineet Jindal", password: "1234" });
    } else {
      reject("ERROR : Something went wrong");
    }
  }, 1000);
});

//if we got an answer or our request has been resolved then we go in then else in catch method
//to check the error.
promiseFour
  .then(function (user) {
    // console.log(user);
    return user.username;
    //now this return will go to the next then call.
  })
  .then((username) =>{
    // console.log(username);
  })

  .catch((error) => {
    // console.log(error);
  })
  //this finally will always run no matter if we got the response or an error it will give us the final 
  //call for that.
  .finally(() =>{
    // console.log("The promise is either resolved or rejected");
  })


  //********************************FIVE************************************** */

  const promiseFive = new Promise((resolve, reject) =>{
    setTimeout(function (){
        let error = false;
        if(!error){
            resolve({username: "Vineet Jindal", password: "1234"});
            }
        else{
            reject("ERROR: Soemthing went wrong");
        }
    })
  });


//now we will be using async and await approach to get the results.
//in async await we use try and catch block for error handling which is same as .then and .catch
async function consumeResponseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch (error){
        console.log(error);
    }
    
}

// consumeResponseFive();


//**************************************USING ASYNC AWAIT and FETCH ***********************************/

async function fetchConcept(){
    try {

        const response = await fetch('https://api.github.com/users/Codevineet');
        // console.log(response);
        //converting json also takes time so we have to add await behind it
        const data = await response.json();
        console.log(data.login);

    } catch (error) {
        
        console.log(error);
    }
}


fetchConcept();


//***************************Another Way**************************************88 */

fetch('https://api.github.com/users/Codevineet')
.then((response) =>{
    return response.json();

})
.then((data) =>{
    console.log(data.login);
})
.catch((error) =>{
    consoe.log(error);
})
