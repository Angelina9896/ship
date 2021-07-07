var ship, shipImg1,edges;
var sea, seaImg
function preload(){
  seaImg=loadImage("sea.png")
  shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200)
  sea.addImage(seaImg)
  sea.scale=0.3
  ship = createSprite(350,250,50,50);
  ship.addAnimation("floating",shipImg1)
  edges = createEdgeSprites();
  ship.scale = 0.25;
  ship.x = 50
 
 
}
  

function draw(){ 
  background("lightblue");

  console.log(ship.x)
  

  
  
  
  
  sea.velocityX=-4
  if(sea.x<0){
    sea.x=sea.width/8
  
  }
  drawSprites();
}

























































