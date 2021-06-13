function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(350, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 50,50, 550,380);
    fill("red");
    stroke("red");
    circle(50,50,50);
    circle(590,50,50);
    circle(590,430,50);
    circle(50,430,50);
    fill("blue");
    stroke("blue");
    rect(75,40,490,20);
    rect(75,420,490,20);
    rect(40,75,20,330);
    rect(580,75,20,330);
}



function take_snapshot(){
    save('tHiS_iS_yOuR_pIcTuRe.png');
    
}