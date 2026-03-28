let number = 0;

document.getElementById("decreaseBtn").onclick = function () {
    number--;
    document.getElementById("number").textContent = `${number}`;
}

document.getElementById("increaseBtn").onclick = function () {
    number++;
    document.getElementById("number").textContent = `${number}`;
}

document.getElementById("resetBtn").onclick = function () {
    number=0;
    document.getElementById("number").textContent = `${number}`;
}