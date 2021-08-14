var path
var boy
function preload(){
  //pre-load images
 path = loadImage("path.png")
 boy = loadImage("Runner-1.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  boy = createSprite(200,200);
  boy.addImage(boy)
  boy.scale = 0.7;
  path = createSprite(200,200);
  path.addImage(path);
  path.velocityY = 4;
  path.scale = 1.2;

  function draw() {
  if(path.y > 400){
    path.y = height/2;
  }
  if (keydown("left")) {
    boy.x = -2
  
  }
  if(keydown("right")) {
    boy.x = +2
  }
  background(0);
  }
}
