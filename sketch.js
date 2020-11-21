var fixedRect,movingRect,obej1,obej2,obej3;




function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400,200,50,100);
  fixedRect.shapeColor="green"
  movingRect=createSprite(300,200,100,50);
  movingRect.shapeColor="green"
  obej1=createSprite(400,200,20,80);
  obej1.shapeColor="orange";
  obej2=createSprite(500,300,40,80);
  obej2.shapeColor="pink";
  obej3=createSprite(700,100,50,50);
  obej3.shapeColor="blue";
}

function draw() {
  background(0);
  movingRect.x=World.mouseX 
  movingRect.y=World.mouseY

  if(isTouching(movingRect,obej3)){
    movingRect.shapeColor="red"
    obej3.shapeColor="red"
  }

  else{
    movingRect.shapeColor="green"
    obej3.shapeColor="blue"
  }
  
  
  drawSprites();
}

function isTouching(obj1,obj2){
  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2
    &&obj2.x-obj1.x<obj1.width/2+obj2.width/2
    &&obj2.y-obj1.y<obj1.height/2+obej2.height/2
    &&obj1.y-obj2.y<obj1.height/2+obj2.height/2){
     return true
  }
  else{
    return false
  }
}