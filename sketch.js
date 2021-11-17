var cuadrado;
function setup() {
  createCanvas(400,400);
  cuadrado = createSprite (200,200,20,20);
  cuadrado.shapeColor = "purple";
}

function draw() 
{
  background(30);
  if(keyDown("up")){
    cuadrado.velocityY = -7;
  }
  if(keyIsDown(LEFT_ARROW)){
    cuadrado.position.x = cuadrado.position.x -5;
  }
  if(keyDown("right")){
    cuadrado.velocityX = 7;
  }
  if(keyIsDown(DOWN_ARROW)){
    cuadrado.position.y = cuadrado.position.y +9;
  }

drawSprites();
}




