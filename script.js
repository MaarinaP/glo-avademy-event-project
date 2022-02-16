const buttonIn = document.getElementById("e_btn");

const btn = document.getElementById("btn");
const text = document.getElementById("text");
const square = document.getElementById("square");

const colorChange = function() {
    square.style.backgroundColor = text.value;
};

//поменять display свойства для кнопки в круге
buttonIn.style.display = "none";

//смена цвета квадрата
btn.addEventListener("click", colorChange);








