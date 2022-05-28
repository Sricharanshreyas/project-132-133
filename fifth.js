function return1(){
    window.location="index.html";
}
img="";
objects=[];
status=false;

function preload(){
    img = loadImage("AC.jpg");
}
function setup(){
    canvas=createCanvas(500,450);
    canvas.position(450,200);
    cocoSSD=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status:Detecting objects";
}
function draw(){
  image(img,0,0,500,450);
    // fill("green");
    // text("Dog",45,75);
    // textSize(30);
    // noFill();
    // stroke("green");
    // rect(45,80,250,400);

    // fill("red");
    // text("Cat",250,75);
    // textSize(30);
    // noFill();
    // stroke("red");
    // rect(250,80,250,400);
if(status != false){
    for(i=0;i<objects.length;i++){
    fill("blue");
    percent = floor(objects[i].confidence * 100);

         text(objects[i].label + " " + percent + "%",objects[i].x-25,objects[i].y-10);
        textSize(30);
        noFill();
        stroke("red");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        document.getElementById("status").innerHTML="status:Objects detected";

    }
}

 
}
function modelloaded(){
    console.log("cocossd is loaded");
    status=true;
    cocoSSD.detect(img,gotresults);
}
function gotresults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
    objects=results;
  

}