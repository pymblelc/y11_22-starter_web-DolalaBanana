//Get elements from html
let twoPic = document.getElementById("twoPic");
let onePic = document.getElementById("onePic");


//Button click of two clicks
twoPic.addEventListener("click", function () {
    window.location.href = "AI.html"
});

//Button click for Onepic
onePic.addEventListener("click", function () {
    window.location.href = "OnePic.html"
});

//Clock
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }