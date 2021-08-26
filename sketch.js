var Car
var Car2
var Truck

function preload(){
  mainCarImg = loadImage("CAR_1.png")
  Car2Img = loadImage("CAR_2.png")
  roadImg = loadImage("ROAD.jpg")
  truckImg = loadImage("TRUCK.png")
}

function setup() {
  createCanvas(1500,600);
  road = createSprite(400,50,700,50)
  road.addImage("ROAD",roadImg)
  road.velocityX = -5
  road.scale= 3.5
 car = createSprite(450, 520, 50, 50);
 car.addImage("mainCar",mainCarImg)
 car.scale = 0.30

 car2 = createSprite(400, 450, 50, 50);
 car2.addImage("car2",Car2Img)
 car2.scale = 0.8

 
}


function draw() {
  background(255,255,255);  
  if (road.x<250){
    road.x = 400
  }
  keyControls();
  spawnObstacles();
  drawSprites();
}

function keyControls (){
  if (keyDown(UP_ARROW)){
    car.y = car.y-2
  }

  if (keyDown(DOWN_ARROW)){
    car.y = car.y+2
  }
}

function spawnObstacles (){
if (frameCount%100==0){
  truck = createSprite (1600,random(400,500),20,20)
  truck.addImage(truckImg)
 truck.scale= 0.6
 truck.velocityX = -5
}
}