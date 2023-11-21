let red = document.querySelector('.red');
let green = document.querySelector('.green');
let blue = document.querySelector('.blue');

red.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
})
green.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
})
blue.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
})