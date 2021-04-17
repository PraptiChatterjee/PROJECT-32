const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png";

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11, 13);
  if(hour>=4 && hour<=6){
      bg = "sunrise1.png";
  }
  else if(hour>=6 && hour<=8){
    bg = "sunrise2.png";
  }
  else if(hour>=8 && hour<=10){
    bg = "sunrise3.png";
  }
  else if(hour>=10 && hour<=11){
    bg = "sunrise4.png";
  }
  else if(hour>=11 && hour<=13){
    bg = "sunrise5.png";
  }
  else if(hour>=14 && hour<=16){
    bg = "sunrise6.png";
  }
  else if(hour>=16 && hour<=17){
    bg = "sunset7.png";
  }
  else if(hour>=17 && hour<=19){
    bg = "sunset8.png";
  }
  else if(hour>=19 && hour<=21){
    bg = "sunset9.png";
  }
  else if(hour>=23 && hour==0){
    bg = "sunset10.png";
  }
  else if(hour==0 && hour<=3){
    bg = "sunset11.png";
  }
  else {
    bg = "sunset12.png";
  }
  backgroundImg = loadImage(bg);
  console.log(responseJSON);
}
