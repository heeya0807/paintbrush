function setup() {
  createCanvas(700, 480);
  
  // R G & values 
  background(225 , 204 , 0);
  
  //take a big brush;
  strokeWeight(10);
  //dip it in color purple
  stroke("purple");
  frameRate(6);
}

function draw() {
  //declare variables
  let posY= mouseY;
  let posX= mouseX;
  //place a dot on a screen
  point(posX, posY);
}