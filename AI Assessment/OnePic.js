//Getting buttons into JS
let results = document.getElementById("myText");
let results2 = document.getElementById("myText2");
let upload = document.getElementById("upload");
let final1 = document.getElementById("result1");
let final2 = document.getElementById("result2");
let simPara = document.getElementById("simPara");
let simPara2 = document.getElementById("simPara2");
let backButton = document.getElementById("backButtonOnePic");

//Switches so buttons cannot be pushed multiple times
var faces;
let sendToAPI = false;
var counter1 = false;
var counter3 = false;

//Variables to store the similarity percentages
let ageSim;
let beardSim;
let moustacheSim;
let sideSim;
let baldSim;
let foreheadSim;

//Backbutton to Start.html
backButton.addEventListener("click", function () {
  window.location.href = "Start.html";
});

//TO store the infomation of the arrays.
var img1Dataone;
var img2Dataone;
var imgdatatotal;

//On the click of the submit button, Store the data, Console log it, and also display the image from the upload button.
document.getElementById("SButton1").addEventListener("click", function () {
  if (counter1 == false) {
    let fileInput = document.getElementById("upload");
    let blob = new Blob([fileInput.files[0]]);
    ImageAPI.analyseFacesBlob(blob, function (data1) {
      console.log(data1);

      img1Dataone = data1[0];
      img2Dataone = data1[1];
      console.log(img1Dataone);
      console.log(img2Dataone);

      imgdatatotal = data1;

      let fileReader = new FileReader();
      fileReader.onload = function (e) {
        document.getElementById("preview").src = e.target.result;
      };
      fileReader.readAsDataURL(fileInput.files[0]);
    });
    counter1 = true;
  }
});

//On the click of the upload button, reset the counters, and reset the results divs.
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

//When the Analyse Button is pressed, display the information, and also calculate percentages.
document.getElementById("AnalyseBTN").addEventListener("click", function () {
  if (counter3 == false) {

    //Make sure the images don't have too many, or too little people
    if (
      imgdatatotal == null ||
      imgdatatotal.length > 2 ||
      imgdatatotal.length == 1
    ) {
      alert("Please Upload and Submit a Picture of Two People");
    } else {
      final1.innerHTML += `<p> Hair Colour: ${imgdatatotal[0].faceAttributes.hair.hairColor[0].color}</p>`; //Display the array information
      final2.innerHTML += `<p> Hair Colour: ${imgdatatotal[1].faceAttributes.hair.hairColor[0].color}</p>`;
      final1.innerHTML += `<p> Gender: ${imgdatatotal[0].faceAttributes.gender}</p>`;
      final2.innerHTML += `<p> Gender: ${imgdatatotal[1].faceAttributes.gender}</p>`;
      final1.innerHTML += `<p> Age: ${imgdatatotal[0].faceAttributes.age}</p>`;
      final2.innerHTML += `<p> Age: ${imgdatatotal[1].faceAttributes.age}</p>`;
      final1.innerHTML += `<p> Beard: ${imgdatatotal[0].faceAttributes.facialHair.beard}</p>`;
      final2.innerHTML += `<p> Beard: ${imgdatatotal[1].faceAttributes.facialHair.beard}</p>`;
      final1.innerHTML += `<p> Moustache: ${imgdatatotal[0].faceAttributes.facialHair.moustache}</p>`;
      final2.innerHTML += `<p> Moustache: ${imgdatatotal[1].faceAttributes.facialHair.moustache}</p>`;
      final1.innerHTML += `<p> SideBurns: ${imgdatatotal[0].faceAttributes.facialHair.sideburns}</p>`;
      final2.innerHTML += `<p> SideBurns: ${imgdatatotal[1].faceAttributes.facialHair.sideburns}</p>`;
      final1.innerHTML += `<p> Glasses: ${imgdatatotal[0].faceAttributes.glasses}</p>`;
      final2.innerHTML += `<p> Glasses: ${imgdatatotal[1].faceAttributes.glasses}</p>`;
      final1.innerHTML += `<p> Baldness: ${imgdatatotal[0].faceAttributes.hair.bald}</p>`;
      final2.innerHTML += `<p> Baldness: ${imgdatatotal[1].faceAttributes.hair.bald}</p>`;
      final1.innerHTML += `<p> Forehead Blocked? : ${imgdatatotal[0].faceAttributes.occlusion.foreheadOccluded}</p>`;
      final2.innerHTML += `<p> Forehead Blocked? : ${imgdatatotal[1].faceAttributes.occlusion.foreheadOccluded}</p>`;

      //Calculte the similarity in percentages. Make sure the percentages are positive.
      ageSim = Math.abs(
        imgdatatotal[0].faceAttributes.age - imgdatatotal[1].faceAttributes.age
      );
      beardSim =
        1 -
        Math.abs(
          imgdatatotal[0].faceAttributes.facialHair.beard -
            imgdatatotal[1].faceAttributes.facialHair.beard
        );
      moustacheSim =
        1 -
        Math.abs(
          imgdatatotal[0].faceAttributes.facialHair.moustache -
            imgdatatotal[1].faceAttributes.facialHair.moustache
        );
      sideSim =
        1 -
        Math.abs(
          imgdatatotal[0].faceAttributes.facialHair.sideburns -
            imgdatatotal[1].faceAttributes.facialHair.sideburns
        );
      baldSim =
        1 -
        Math.abs(
          imgdatatotal[0].faceAttributes.hair.bald -
            imgdatatotal[1].faceAttributes.hair.bald
        );

        //Display the similarity percentages
      console.log(ageSim);
      simPara.innerHTML += `<p> Difference in Ages: ${ageSim} </p>`;
      simPara.innerHTML += `<p> Beard Similarity: ${beardSim}%</p>`;
      simPara.innerHTML += `<p> Moustache Similarity: ${moustacheSim}%</p>`;
      simPara.innerHTML += `<p> Sideburns Similarity: ${sideSim}%</p>`;
      simPara.innerHTML += `<p> Baldness Similarity: ${baldSim}%</p>`;

      //Display if the other facial features that don't involve percentages
      if (
        imgdatatotal[0].faceAttributes.hair.hairColor[0].color ==
        imgdatatotal[1].faceAttributes.hair.hairColor[0].color
      ) {
        simPara2.innerHTML += `<p> Hair Colour Matches! </p>`;
      }

      if (
        imgdatatotal[0].faceAttributes.gender ==
        imgdatatotal[1].faceAttributes.gender
      ) {
        simPara2.innerHTML += `<p> Gender Matches! </p>`;
      }

      if (
        imgdatatotal[0].faceAttributes.glasses == "NoGlasses" &&
        imgdatatotal[1].faceAttributes.glasses == "NoGlasses"
      ) {
        simPara2.innerHTML += `<p> Both have no Glasses! </p>`;
      } else if (
        imgdatatotal[0].faceAttributes.glasses != "NoGlasses" &&
        imgdatatotal[1].faceAttributes.glasses != "NoGlasses"
      ) {
        simPara2.innerHTML += `<p> Both have Glasses! </p>`;
      }

      counter3 = true;
    }
    //Make sure the image doesn't have invisible hair, or the analysis won't complete
    if (
      imgdatatotal[0].faceAttributes.hair.invisible ||
      imgdatatotal[1].faceAttributes.hair.invisible
    ) {
      alert("Please make it so your hair is visible.");
    }
  }
});
