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