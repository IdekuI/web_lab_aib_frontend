let colorbox = document.querySelector('.color_win');
let red = document.querySelector('.inputRed');
let green = document.querySelector('.inputGreen');
let blue = document.querySelector('.inputBlue');

alert("Пожалуйста, введите числовые значения для красного, зеленого и синего.");

red.addEventListener('input', updateColor);
green.addEventListener('input', updateColor);
blue.addEventListener('input', updateColor);

function updateColor(){
    let redv = red.value;
    let greenv = green.value;
    let bluev = blue.value;

    redv=parseInt(redv);
    greenv=parseInt(greenv);
    bluev=parseInt(bluev);

    if(redv > 255 || redv < 0 || greenv > 255 || greenv < 0 || bluev > 255 || bluev < 0){
        alert("Значения должны находиться в диапазоне от 0 до 255.");
        return;
    }

    let color = "rgb(" + redv + "," + greenv + "," + bluev + ")";
    colorbox.style.backgroundColor = color;
}

function isNumeric(value) {
    return !isNaN(parseInt(value)) && isFinite(value);
};