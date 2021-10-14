var noseX = 0; 
var noseY = 0; 

function preload() {
    nose = loadImage("https://i.postimg.cc/SxHzfvg6/moustache-PNG38.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    capture = createCapture(VIDEO);
    capture.size(300, 300)
    capture.hide();
    
    posNet = ml5.poseNet(capture, modelLoaded);
    posNet.on("pose", gotPoses);
    
    
}

function modelLoaded() {
    console.log("Loaded");
}

function gotPoses(results){
    
    if (results.length > 0) {
        console.log(results);   
        console.log("noseX = " + results[0].pose.nose.x);    
        // console.log("leftEarX = " + results[0].pose.leftEar.x);    
        noseX =  results[0].pose.nose.x;
        noseY =  results[0].pose.nose.y;
        // console.log("leftEarY = " + results[0].pose.leftEar.y);    
        console.log("noseY = " + results[0].pose.nose.y); 
        
    }
}


function draw() {   
    image(capture, 0, 0, 300, 300)
    stroke(255, 0, 0);
    fill(255,0,0); 
    // circle(noseX , noseY , 10);
    image(nose, noseX - 15, noseY +5, 30, 30)
}

function take_snapshot() {
    save("myFilterImage.jpg")
}