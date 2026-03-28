const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");

const min = 1;
const max = 6;

let value1, value2, value3;

document.getElementById("roll").onclick = function () {
    value1= Math.floor(Math.random()*max)+min;
    value2= Math.floor(Math.random()*max)+min;
    value3= Math.floor(Math.random()*max)+min;
    dice1.textContent = value1;
    dice2.textContent = value2;
    dice3.textContent = value3;
}