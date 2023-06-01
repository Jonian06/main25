nose_x=0;
nose_y=0;

function preload(){
moustache=loadimage("moustache.png")
}

function setup(){
canvas=createcanvas(300,300);
canvas.centre();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose', gotposes);
}

function modelloaded(){
console.log('posenet is initialized');
}

function gotposes(results){
if(results.length>0)
{
console.log(results);
nosex=+results[0].pose.nose.x;
nosey=+results[0].pose.nose.y;
console.log("nosex=",+nosex);
console.log("nosey=",+nosey);
}
}

function draw(){
image(video,0,0,300,300);
image(lipstick,nose_X,nose_Y,30,30);
}
    
function take_snapshot(){
save('myfilter.png');
}