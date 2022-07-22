//Getting buttons into JS
let results = document.getElementById("myText");
let results2 = document.getElementById("myText2");
let upload = document.getElementById("upload");
let final1 = document.getElementById("result1");
let final2 = document.getElementById("result2");
let simPara = document.getElementById("simPara");
let simPara2 = document.getElementById("simPara2");
let backButton = document.getElementById("backButtonAI");

var faces;
let sendToAPI = false;
var counter1 = false; //Makes sure the user cannot spam submit btn1
var counter2 = false; //Makes sure the user cannot spam submit btn2
var counter3 = false; //Makes sure the user cannot spam Analyse Button

let ageSim;
let beardSim;
let moustacheSim;
let sideSim;
let baldSim;
let foreheadSim;

backButton.addEventListener("click", function () {
  window.location.href = "Start.html";
});

//Variables
//var faces; This as to test storing the data.
//let sendToAPI = false; This was to make sure it only sent once in the Test

backButton.addEventListener("click", function () {
  window.location.href = "Start.html";
});

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

var img1Data; //to store data from img1
var img2Data; //to store data from img2

//Whn Submit btn from the first img is pressed
document.getElementById("SButton1").addEventListener("click", function () {
  if (counter1 == false) {
    //this is for the first click
    //Uses the AI on the blob
    let fileInput = document.getElementById("upload");
    let blob = new Blob([fileInput.files[0]]);
    ImageAPI.analyseFacesBlob(blob, function (data) {
      console.log(data);

      //enter the data into a global variable so I can use in other buttons
      img1Data = data;

      //This allows the user to view the image
      let fileReader = new FileReader();
      fileReader.onload = function (e) {
        document.getElementById("preview").src = e.target.result;
      };
      fileReader.readAsDataURL(fileInput.files[0]);
    });
    counter1 = true; //The button has been clicked once, it shouldn't be able to click again
  }
});
//To make sure the user can change the picture uploaded, and submit again
document.getElementById("upload").addEventListener("click", function () {
  counter1 = false;
  counter3 = false;
  final1.innerHTML = `<h4> Person 1 Results </h4>
  `;
  final2.innerHTML = `<h4> Person 2 Results </h4>
  `;
  simPara.innerHTML = ``;
  simPara2.innerHTML = ``;
});

//Repeating the process for image two.
document.getElementById("test2").addEventListener("click", function () {
  if (counter2 == false) {
    let fileInput2 = document.getElementById("upload2");
    let blob = new Blob([fileInput2.files[0]]);
    ImageAPI.analyseFacesBlob(blob, function (data) {
      console.log(data);
      img2Data = data; //global variable

      let fileReader2 = new FileReader();
      fileReader2.onload = function (e) {
        document.getElementById("preview2").src = e.target.result;
      };
      fileReader2.readAsDataURL(fileInput2.files[0]);
    });
    counter2 = true;
  }
});
document.getElementById("upload2").addEventListener("click", function () {
  counter2 = false;
});

//When the Analyse button is clicked
document.getElementById("AnalyseBTN").addEventListener("click", function () {
  if (counter3 == false) {
    if (
      img1Data == null || //check if the user has uploaded and submitted both pictures
      img2Data == null ||
      img1Data.length > 1 ||
      img2Data.length > 1
    ) {
      alert("Please Upload and Submit Pictures of One Person"); //tell the user if not.
    } else {
      final1.innerHTML += `<p> Hair Colour: ${img1Data[0].faceAttributes.hair.hairColor[0].color}</p>`; //display the different attributes information.
      final2.innerHTML += `<p> Hair Colour: ${img2Data[0].faceAttributes.hair.hairColor[0].color}</p>`;
      final1.innerHTML += `<p> Gender: ${img1Data[0].faceAttributes.gender}</p>`;
      final2.innerHTML += `<p> Gender: ${img2Data[0].faceAttributes.gender}</p>`;
      final1.innerHTML += `<p> Age: ${img1Data[0].faceAttributes.age}</p>`;
      final2.innerHTML += `<p> Age: ${img2Data[0].faceAttributes.age}</p>`;
      final1.innerHTML += `<p> Beard: ${img1Data[0].faceAttributes.facialHair.beard}</p>`;
      final2.innerHTML += `<p> Beard: ${img2Data[0].faceAttributes.facialHair.beard}</p>`;
      final1.innerHTML += `<p> Moustache: ${img1Data[0].faceAttributes.facialHair.moustache}</p>`;
      final2.innerHTML += `<p> Moustache: ${img2Data[0].faceAttributes.facialHair.moustache}</p>`;
      final1.innerHTML += `<p> SideBurns: ${img1Data[0].faceAttributes.facialHair.sideburns}</p>`;
      final2.innerHTML += `<p> SideBurns: ${img2Data[0].faceAttributes.facialHair.sideburns}</p>`;
      final1.innerHTML += `<p> Glasses: ${img1Data[0].faceAttributes.glasses}</p>`;
      final2.innerHTML += `<p> Glasses: ${img2Data[0].faceAttributes.glasses}</p>`;
      final1.innerHTML += `<p> Baldness: ${img1Data[0].faceAttributes.hair.bald}</p>`;
      final2.innerHTML += `<p> Baldness: ${img2Data[0].faceAttributes.hair.bald}</p>`;
      final1.innerHTML += `<p> Forehead Blocked? : ${img1Data[0].faceAttributes.occlusion.foreheadOccluded}</p>`;
      final2.innerHTML += `<p> Forehead Blocked? : ${img2Data[0].faceAttributes.occlusion.foreheadOccluded}</p>`;

      //Calculate the similarity with percentages
      ageSim = Math.abs(
        img1Data[0].faceAttributes.age - img2Data[0].faceAttributes.age
      );
      beardSim =
        1 -
        Math.abs(
          img1Data[0].faceAttributes.facialHair.beard -
            img2Data[0].faceAttributes.facialHair.beard
        );
      moustacheSim =
        1 -
        Math.abs(
          img1Data[0].faceAttributes.facialHair.moustache -
            img2Data[0].faceAttributes.facialHair.moustache
        );
      sideSim =
        1 -
        Math.abs(
          img1Data[0].faceAttributes.facialHair.sideburns -
            img2Data[0].faceAttributes.facialHair.sideburns
        );
      baldSim =
        1 -
        Math.abs(
          img1Data[0].faceAttributes.hair.bald -
            img2Data[0].faceAttributes.hair.bald
        );

      //Display the text, and similarity percentages
      console.log(ageSim);
      simPara.innerHTML += `<p> Difference in Ages: ${ageSim} </p>`;
      simPara.innerHTML += `<p> Beard Similarity: ${beardSim * 100}%</p>`;
      simPara.innerHTML += `<p> Moustache Similarity: ${
        moustacheSim * 100
      }%</p>`;
      simPara.innerHTML += `<p> Sideburns Similarity: ${sideSim * 100}%</p>`;
      simPara.innerHTML += `<p> Baldness Similarity: ${baldSim * 100}%</p>`;

      //Text for the other facial features, that don't involve numbers.
      if (
        img1Data[0].faceAttributes.hair.hairColor[0].color ==
        img2Data[0].faceAttributes.hair.hairColor[0].color
      ) {
        simPara2.innerHTML += `<p> Hair Colour Matches! </p>`;
      }

      if (
        img1Data[0].faceAttributes.gender == img2Data[0].faceAttributes.gender
      ) {
        simPara2.innerHTML += `<p> Gender Matches! </p>`;
      }

      if (
        img1Data[0].faceAttributes.glasses == "NoGlasses" &&
        img2Data[0].faceAttributes.glasses == "NoGlasses"
      ) {
        simPara2.innerHTML += `<p> Both have no Glasses! </p>`;
      } else if (
        img1Data[0].faceAttributes.glasses != "NoGlasses" &&
        img2Data[0].faceAttributes.glasses != "NoGlasses"
      ) {
        simPara2.innerHTML += `<p> Both have Glasses! </p>`;
      }

      counter3 = true;
    }
    //Make sure that the hair is not invisible, or the code won't work. 
    if (
      img1Data[0].faceAttributes.hair.invisible ||
      img2Data[0].faceAttributes.hair.invisible
    ) {
      alert("Please make it so your hair is visible.");
    }
    
  }
});
