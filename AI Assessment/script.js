let myImage = document.getElementById("myPhoto");
let myButton = document.getElementById("btnAnalyse");
let results = document.getElementById("myText");
let myImage2 = document.getElementById("myPhoto2");
let myButton2 = document.getElementById("btnAnalyse2");
let results2 = document.getElementById("myText2");
let Submit = document.getElementById("Submit");
let imgDiv1 = document.getElementById("imgDiv1");

var faces;
let sendToAPI = false;
//let backButtonAI = document.getElementById("backButtonAITest");

let imageURL2 = myImage2.src;
myButton.addEventListener("click", function () {
  if (sendToAPI == false) {
    ImageAPI.analyseFaces(imageURL, function (data) {
      data.sort(function (a, b) {
        if (a.faceRectangle.left < b.faceRectangle.left) {
          return -1;
        } else {
          return 1;
        }
      });

      results.innerHTML += `<p class = "para"> The face in the picture looks about ${data[0].faceAttributes.age} years old. <p>`;
      faces = [
        {
          haircol: data[0].faceAttributes.hair.hairColor[0],
        },
      ];

      console.log(data[0]);
      sendToAPI = true;
      console.log(sendToAPI);
    });
  }
});

myButton2.addEventListener("click", function () {
  ImageAPI.analyseFaces(imageURL2, function (data) {
    data.sort(function (a, b) {
      if (a.faceRectangle.left < b.faceRectangle.left) {
        return -1;
      } else {
        return 1;
      }
    });

    results2.innerHTML += `<p> The face in the picture looks about ${data[0].faceAttributes.age} years old. <p>`;

    console.log(data[0]);
    console.log("uhm");
  });
});

Submit.addEventListener("click", function () {
  console.log(faces);
  results.innerHTML += `haircol: ${faces[0].haircol.color}`;
});
/*
[0].haircol.color
backButtonAI.addEventListener("click", function () {
  window.location.href = "../Pages/Pages.html";
});
*/

document.getElementById("test1").addEventListener("click", function () {
  let fileInput = document.getElementById("upload");
  let blob = new Blob([fileInput.files[0]]);
  ImageAPI.analyseFacesBlob(blob, function (data) {
    console.log(data);
    /*
    imgDiv1.innerHTML = `<img class= para
    id="myPhoto2"
    width="200"
    src="${fileReader.readAsDataURL(fileInput.files[0])}"
    alt="a photo"
    />`;*/

    let fileReader = new FileReader();
    fileReader.onload = function (e) {
      document.getElementById("preview").src = e.target.result;
    };
    fileReader.readAsDataURL(fileInput.files[0]);
    console.log(fileReader);
  });
});
