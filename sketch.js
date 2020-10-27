function setup() {

  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(400,400,80,30);
  
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "green";
   text("red",200,200)
  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;

  rect1 = createSprite(100,100,50,100);
  rect2 = createSprite(700,100,50,100);
  rect1.velocityX = 5;
  rect2.velocityX=-5;
  rect1.shapeColor = "blue";
  rect2.shapeColor = "yellow"

}

function draw() {

  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x <= movingRect.width/2+fixedRect.width/2
    && fixedRect.x - movingRect.x <= movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y<= movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y<= movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor = "purple";
    movingRect.shapeColor = "purple";
  }
  else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "green";
  }

  if(rect1.x - rect2.x < rect1.width/2+rect2.width/2
    && rect2.x - rect1.x < rect1.width/2+rect2.width/2){
        rect1.velocityX = rect1.velocityX * (-1);
        rect2.velocityX = rect2.velocityX * (-1);
    }
  drawSprites();
}