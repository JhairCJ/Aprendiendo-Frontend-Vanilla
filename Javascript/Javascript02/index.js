let username;
document.getElementById("submit").onclick = function(){
    username = document.getElementById("username").value;
    document.getElementById("title").textContent = `Hello, ${username}`
}