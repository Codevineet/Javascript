const link = document.createElement('a');
// link.setAttribute('href' , "https://google.com");
// link.children = 'Click on the link';

link.className = 'firstLink';
link.setAttribute("href" , "https://google.com");
// link.innerText = "Click the Link";

//This is the another way of adding the text inside a tag by using createTextNode and then append that 
//child into the link.
const add = document.createTextNode("Click on this Link");
link.appendChild(add);
console.log(link);


//appending the link child inside the body;
// document.body.appendChild(link);

//we can also append this link tag that we have created with the use of js inside
const div = document.querySelector('.container');
console.log(div);
div.appendChild(link);