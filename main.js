let ExpandButton = document.getElementById("myExpandButton");
let backButton = document.getElementById("backButton");

ExpandButton.addEventListener("click", function () {
  window.location.href = "Pages/Pages.html";
});

backButton.addEventListener("click", function () {
  window.location.href = "/main.html";
  console.log("why isn't it going back?");
});
