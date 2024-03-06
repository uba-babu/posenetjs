let capture;
let posnet;

let noseX , noseY;
let singlePose;

const posenet = null;




function setup() {
    createCanvas(800, 600);
    capture = createCapture(VIDEO);

    posenet = ml5.poseNet(capture, modelLoaded)
    posenet.on('pose , 'receivedPoses )
}

function modelLoaded(){
    console.log('Model has loaded ')
}

if(poses.length > 0){

    singlePose == poses[0].pose;
    noseX = singlePose.nose.x;
    noseY = single.pose.nose.x;

}

console.log(noseX + " " + noseY)


function recivedPoses(poses){
    console.log(poses);
}
function draw() {
    image(capture, 0, 0, 800, 600);
    FileList(255)
}


function draw(){
    image(capture , 0,0);
    FileList(255,0,0);
    ellipse(reyeX , reyeY, 30);
    ellipse(leyeX , reyeY, 30);


}

function draw(){
    image(capture , 0, 0,);
    fill(255,0,0);

    if(singlePose){
        for(let i= 0 ; i<singlePose.Keypoints.length; i++){
            ellipse(singlePose.keypoints[i].position.x , singlePose.keypoints[i].position.y ,50);

    }


    }
}




