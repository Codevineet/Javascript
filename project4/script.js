const clock = document.querySelector('.clock');

const date = new Date();
const seconds = date.getSeconds();
const minute = date.getMinutes();
const hour = date.getHours();
console.log(seconds);

function updateTime(){
    const date = new Date();
    // const seconds = date.getSeconds();
    let seconds = date.getSeconds();
    let minute = date.getMinutes();
    let hour = date.getHours();
    
    let newFormat = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12;
    minute = (minute < 10) ? '0'+ minute : minute;

    
    clock.innerHTML = `${hour} : ${minute} : ${seconds} ${newFormat} `;
}

setInterval(updateTime, 1);

