let results = document.getElementById("myText");
let results2 = document.getElementById("myText2");
let imgDiv1 = document.getElementById("imgDiv1");

let twoPic = document.getElementById("twoPic");


var faces;
let sendToAPI = false;
//let backButtonAI = document.getElementById("backButtonAITest");


/* THIS WAS TEST
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

    let fileReader = new FileReader();
    fileReader.onload = function (e) {
      document.getElementById("preview").src = e.target.result;
    };
    fileReader.readAsDataURL(fileInput.files[0]);
    console.log(fileReader);
  });
});

document.getElementById("test2").addEventListener("click", function () {
  let fileInput2 = document.getElementById("upload2");
  let blob = new Blob([fileInput2.files[0]]);
  ImageAPI.analyseFacesBlob(blob, function (data) {
    console.log(data);

    let fileReader2 = new FileReader();
    fileReader2.onload = function (e) {
      document.getElementById("preview2").src = e.target.result;
    };
    fileReader2.readAsDataURL(fileInput2.files[0]);
    console.log(fileReader2);
  });
});

twoPic.addEventListener("click", function () {
    window.location.href = "AI.html"
});

