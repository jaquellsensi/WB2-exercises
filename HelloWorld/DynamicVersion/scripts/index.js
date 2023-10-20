"use strict";

window.onload = init;

function init() {
    const helloBtn = document.getElementById("helloBtn");
    helloBtn.onclick = onHelloBtnClicked;
    let messagePara = document.getElementById("helloBtn");
}

function onHelloBtnClicked() {
    alert("Hi there!");
}