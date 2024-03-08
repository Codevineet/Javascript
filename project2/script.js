
const button = document.querySelector('#submit');


button.addEventListener('click' , () =>{
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `please give a valid weight ${weight}`;
    }
    const height_in_meter = height/100;
    const sqaureHeight = height_in_meter * height_in_meter;
    let bmi =  weight / sqaureHeight;
    bmi = bmi.toFixed(2);

    if(bmi < 18.6){
        result.innerHTML = `${bmi}, Underweight`;
        result.style.color = 'orange';
    }
    else if(bmi >= 18.6 && bmi <= 24.9){
        result.innerHTML = `${bmi}, Normal`;
        result.style.color = 'green';
    }
    else{
        result.innerHTML = `${bmi}, Overweight`;
        result.style.color = 'red';
    }
    
})