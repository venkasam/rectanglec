var stillrect,moverect;

function setup() {
  createCanvas(800,400);
  stillrect=createSprite(400, 200, 50, 50);
  moverect=createSprite(300,200,80,50);
}

function draw() {
  background(255,255,255);  
  moverect.x=mouseX
  moverect.y=mouseY
  if(moverect.x-stillrect.x<moverect.width/2+stillrect.width/2&&
    stillrect.x-moverect.x<moverect.width/2+stillrect.width/2 &&
    moverect.y-stillrect.y<moverect.height/2+stillrect.height/2&&
    stillrect.y-moverect.y<moverect.height/2+stillrect.height/2 ){

      stillrect.shapeColor="blue"
      moverect.shapeColor="blue"

    }
    else {
      stillrect.shapeColor="red"
      moverect.shapeColor="red"
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();
}

