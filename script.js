const buttonIn = document.getElementById("e_btn");

const btn = document.getElementById("btn");
const text = document.getElementById("text");
const square = document.getElementById("square");

const range = document.getElementById("range");
const span = document.getElementById("range-span");
const circle = document.getElementById("circle");
range.step = 10;

const colorChange = function() {
    square.style.backgroundColor = text.value;
};

const rangeChange = function(event) {
    span.textContent = event.target.value;
    circle.style.width = event.target.value + "%";
    circle.style.height = circle.style.width;
};

//поменять display свойства для кнопки в круге
buttonIn.style.display = "none";

//смена цвета квадрата
btn.addEventListener("click", colorChange);

//изменение величины круга
range.addEventListener('input', rangeChange);










