var wall,thickness,bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
wall=createSprite(1300,200,thickness,200);

weight=random(30,52);
speed=random(100,200);

bullet=createSprite(50,200,50,50);
bullet.shapeColor="yellow";
bullet.velocityX=speed;
}

function draw() {
  background(0,0,0); 
  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor="red";

    }
    if(damage<10){
      wall.shapeColor="green";
    }

  }
  
  
  drawSprites();
}
function hascollided(obj1,obj2){
  bulletRightEdge=obj1.x+obj1.width;
  wallLeftEdge=obj2.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
    else {
      return false;
    }
  
  
}