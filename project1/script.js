const buttons = document.querySelectorAll('.boxes');
const bodyy = document.querySelector('body');

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        bodyy.style.backgroundColor = e.target.id;
    });
});
