Webcam.set
({
width:350,
height:350,
image_format:'png',
png_quality:100,
constraints:{facingMode:'environment'}
});

camera=document.getElementById("camera");
Webcam.attach(camera);

