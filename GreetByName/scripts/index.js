
window.onload = init;

function init() {
    let greetBtn = document.getElementById("greetBtn");
    greetBtn.onclick = onGreetUserBtnClicked;
    
}

function onGreetUserBtnClicked() {
    let username = document.getElementById("nameField").value
    alert("Hello "+ username);
}