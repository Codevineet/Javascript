function cartPrice(...price){
    //I
    let total_cart = price;
    let total = 0;
    for(let i = 0; i < total_cart.length; i++){
        total += total_cart[i];
    }

    return total;
}

console.log(cartPrice(10 , 10, 30, 50));

//second syntax of declaring functions
const answer = function (num){
    return num + 1;
}

//but it has only one problem, which is we can't use it before initialization.
console.log(answer(5));