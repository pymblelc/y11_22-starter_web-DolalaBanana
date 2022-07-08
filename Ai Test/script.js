let myImage = document.getElementById("myPhoto");
let myButton = document.getElementById("btnAnalyse");
let results = document.getElementById("myText");
let backButtonAI = document.getElementById("backButtonAITest");



let imageURL = myImage.src;

myButton.addEventListener("click", function () {
  ImageAPI.analyseFaces(imageURL, function (data) {
    data.sort(function (a, b) {
      if (a.faceRectangle.left < b.faceRectangle.left) {
        return -1;
      } else {
        return 1;
      }
    });

    for (const person in data) {
      console.log(person, data[person]);
      results.innerHTML += `<p> Face ${parseInt(person)+1} in the picture looks about ${data[person].faceAttributes.age} years old. <p>`;
    }
  });
});



