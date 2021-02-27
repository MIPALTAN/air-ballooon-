var balloon;
var dataBase;
var position;

function setup() {
  createCanvas(800,400);
 ball=createSprite(400, 200, 50, 50);
 ball.shapeColor("blue")
}

function draw() {
  background(255,255,255);  
  drawSprites();
}