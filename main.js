function setup(){
canvas=createCanvas(400, 370);
canvas.position(700,150);
video=createCapture(VIDEO);
video.size(550,500);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet is initiated");
}
function gotPoses(results){
    if(results.length>0){console.log(results)};
}
function draw(){
    background('#e37bdc');

}