
const min = 1;
const max = 100;
const value= Math.floor(Math.random()*max)+min;
let guess;
let attempts=0;
let dif = 0;
document.getElementById("title").textContent = `Guess the number between ${min} - ${max}`;
document.getElementById("submit").onclick = function () {
    attempts++;
    guess=document.getElementById("guess").value;
    guess=Number(guess);
    if(isNaN(guess)){
        document.getElementById("message").textContent = `Please enter a valid number`;
    } else if(guess!=value){
        dif = Math.abs(value-guess);
        console.log(dif);
        if(dif>50){
            document.getElementById("message").textContent = "Very cold";
        } else if(dif>25){
            document.getElementById("message").textContent = "Cold";
        } else if(dif>10){
            document.getElementById("message").textContent = "Warm";
        } else if(dif>5){
            document.getElementById("message").textContent = "Hot";
        } else if(dif>=1){
            document.getElementById("message").textContent = "Very Hot";
        }
    } else{
        document.getElementById("message").textContent = `You guessed it, ${value}. In ${attempts} attempts`;
        document.getElementById("guess-label").style.display = "none";
        document.getElementById("guess").style.display = "none";
        document.getElementById("submit").style.display = "none";
    }
}