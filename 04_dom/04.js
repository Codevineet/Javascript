console.log("Working...");

function creatingElement(langName){
    let element = document.createElement('li');
    const add = document.createTextNode(langName);
    element.appendChild(add);
    console.log(element);
    let container = document.querySelector('.container');
    container.appendChild(element);
}

creatingElement('Ruby');    
//this function is perfectly fine, but if we have added 1000 languages already then 
// the dom has to transverse the all languages to add a new lang using the above function
//for that we gonna write an optimal solution for this.

//above code is absolutely correct because we are not using element.innerText = 'langName';
//this innerText takes a lot of time to transverse the array so we better dont use this.


//now editing the elements;
const editing = document.querySelector('li:nth-child(2)');
//editing.innerHTML = '<h1>Editing you</h1>';
//this approach takes a lot of time as we discussed earlier.
const newLi = document.createElement('li');
newLi.appendChild(document.createTextNode('CPP'));

//here replaceWith function has been used to replace the tags.
editing.replaceWith(newLi);


//now removing the elements.

const remove = document.querySelector('li:last-child');
remove.remove();




