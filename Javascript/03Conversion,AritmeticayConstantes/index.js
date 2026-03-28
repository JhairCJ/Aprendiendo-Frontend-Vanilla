const PI = 3.1416;
let radius, circumference;

document.getElementById("submit").onclick = function(){
    radius=document.getElementById("radius").value;
    radius=Number(radius);
    circumference=2*PI*radius;
    document.getElementById("response").textContent = `The circumference is ${circumference}`;
}