//get element by id.

const heading = document.getElementById('main-heading');
// heading.innerText = 'we have changed the heading';
heading.style.backgroundColor = 'orange';
heading.style.color  = 'black';
heading.style.borderRadius  = '10px';


//to get the content of any tag we use textContent, innerHTML, innerText
//all gives the same value.
//what is the difference 
//on textContent - it shows all the content no matter if u hide it or not
//innerHTML also gives the content + html tags
console.log(heading.textContent);
console.log(heading.innerText);


//get element by class name
const mainContainer = document.getElementsByClassName('container');
console.log(mainContainer);


//by using the querySelector
//it works on only first element.
const head = document.querySelector('h1');
head.style.backgroundColor = 'pink';

//by using the querSelectorAll 
//it selects all the element with that tag and gives an array not exactly an array but list of html collection
// and further we can perfrom the operations on it by using loops
//only foreach is working in this condition
const head2 = document.querySelectorAll('h1');
console.log(head2);

head2.forEach((x) =>{
    x.style.backgroundColor = 'green';
})

//check it by using class name
const red = document.getElementsByClassName('red');


//to convert html collections into array 
const listArray = Array.from(red);
console.log(listArray);

listArray.map((item) => {
    return item.style.backgroundColor = 'red';
})