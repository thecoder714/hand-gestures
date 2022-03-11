camera = document.getElementById("livefeed");

Webcam.set({
    height: 350,
    width: 500,
    img_format: "png",
    png_quality: 1000
});

Webcam.attach(camera);

function captureImage() {
    Webcam.snap(function(data_uri) {
        document.getElementById('capturedimage').innerHTML = "<img src=" + data_uri + ">"
    });
}
