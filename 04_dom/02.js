const parent = document.querySelector('.container');
console.log(parent);
console.log(parent.children);

for(let i = 0; i < parent.children.length ; i++){
    // console.log(parent.children[i].innerHTML);
}

parent.children[0].style.color = 'red';
console.log("NODES :" , parent.childNodes);
//every parent, every child and element inside it is a parent node
//we can also use it by using firstElementChild and lastElementChild going from parent to child
//but we can also go from child to parent. by parentElement

console.log(parent.firstElementChild.innerHTML);
console.log(parent.lastElementChild.innerHTML);

const child = document.querySelector('.days');
// console.log(child.parentElement.firstElementChild.innerHTML);
// console.log(child.parentElement);
// console.log(child.nextElementSibling);


