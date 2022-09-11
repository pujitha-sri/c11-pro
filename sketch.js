var sea,ship;
var seaImg,shipImg;

function preload(){
  //Choose the correct option by uncommenting the right line to load the animation for ship.
  seaImg = loadImage("sea.png");
  shipImg=loadAnimation("ship-1.png","ship-2.png")



}

function setup(){
  createCanvas(600,1200);
  background("0");
 


//adding scale and position to ship



  // Moving background
  sea=createSprite(200,200);
  sea.addImage(seaImg);
  sea.scale=0.3;
  ship=createSprite(100,300,10,20)
ship.addAnimation("moving",shipImg)

ship.scale=0.20
ship.x=40
}

function draw() {
  background("white");
sea.velocityX= -4

if(sea.x<0){
 sea.x=width/2}
//Uncomment the correct line to make the background move to create a forward moving effect for the boat.
  //sea.velocityY = -3;
  //sea.x = -3;
  sea.velocityX = -3;
  //sea.velocityX = 3;
  drawSprites();}
