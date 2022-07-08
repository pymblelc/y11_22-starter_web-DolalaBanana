//From Pages.html
let ExpandButton = document.getElementById("myExpandButton");
let backButton = document.getElementById("backButton");
let backButton2 = document.getElementById("backButtonAITest");

let checkItOut1 = document.getElementById("checkItOutbtn1");
let checkItOut2 = document.getElementById("checkItOutbtn2");



backButton.onclick = function() {
  window.location.href = "../main.html";
};

backButton.addEventListener("click", function () {
  window.location.href = "../main.html";
});

//?????? 
/*
backButton2.addEventListener("click", function () {
  window.location.href = "../main.html";
});*/


//HELLO?
checkItOut1.addEventListener("click", function () {
  window.location.href = "../Ai Test/index.html";
});

checkItOut2.addEventListener("click", function () {
  window.location.href = "../AI Assessment/Start.html";
});


