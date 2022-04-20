// console.log("ml5.js version:", ml5.version);

// camera = document.getElementById("livefeed");
// let classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hz3S9-jph/model.json');
// let data_uri = "";

// Webcam.set({
// 	height: 350,
// 	width: 500,
// 	img_format: "png",
// 	png_quality: 90,
// });

// Webcam.attach(camera);

// function capture() {
// 	Webcam.snap(function (data_uri) {
// 		document.getElementById("capturedimage").innerHTML =
// 			"<img src=" + data_uri + ">";
// 	});
// }

// function modelLoaded() {
// 	console.log("model loaded");
// }

// function check() {
// 	img = document.getElementById('capturedimage');
// 	console.log(img);
// 	classifier.classify(img, gotResults);
// }

// function gotResults(results, error) {
// 	if (error) { 
// 		console.error(error); 
// 	} else {
// 		console.log(results); 
// 		document.getElementById("result_object_name").innerHTML = results[0].label; 
// 		gesture = results[0].label; toSpeak = ""; 
// 		if(gesture == "amazing") {
// 			 toSpeak = "This is looking amazing"; document.getElementById("result_object_gesture_icon").innerHTML = "&#128076;";
// 		} else if(gesture == "best") {
// 			 toSpeak = "All the best"; 
// 			 document.getElementById("result_object_gesture_icon").innerHTML = "&#128077;"; 
// 		} else if(gesture == "victory") {
// 			 toSpeak = "That was the marvelous victory"; document.getElementById("result_object_gesture_icon").innerHTML = "&#9996;"; 
// 		}
// 	}
// 	speak();
// }

// function speak() {
// 	var synth = window.speechSynthesis; speak_data = toSpeak; var utterThis = new SpeechSynthesisUtterance(speak_data); synth.speak(utterThis);
// }

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("livefeed");

Webcam.attach('livefeed');

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("capturedimage").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xQRttb4CE/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    
    document.getElementById("result_object_name").innerHTML = results[0].label;

    gesture = results[0].label;
    
    toSpeak = "";
    
    if(gesture == "amazing")
    {
      toSpeak = "This is looking amazing";
      document.getElementById("result_object_gesture_icon").innerHTML = "&#128076;";
    }
    else if(gesture == "best")
    {
      toSpeak = "All the best";
      document.getElementById("result_object_gesture_icon").innerHTML = "&#128077;";
    }
    else if(gesture == "victory")
    {
      toSpeak = "That was the marvelous victory";
      document.getElementById("result_object_gesture_icon").innerHTML = "&#9996;";
    }

    speak();
  }
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = toSpeak;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

}