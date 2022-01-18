function setup(){
  createCanvas(400,400);
}

function draw() 
{
  if (keyIsDown(UP_ARROW)){
    background('yellow');
  }
if (keyIsDown(RIGHT_ARROW)){
  background('purple');
}
 if (keyIsDown(LEFT_ARROW)){
   background('pink');
 }
  if (keyIsDown(DOWN_ARROW)){
   background('red');
  }
drawSprites();
}




