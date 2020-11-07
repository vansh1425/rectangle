var fixedrect,movingrect;


function setup() {
  createCanvas(800,400);
  movingrect = createSprite(200, 200, 100, 20);
  movingrect.shapeColor="yellow";
  movingrect.debug=true;

  fixedrect = createSprite(100,200,20,100);
  fixedrect.shapeColor="blue";
  fixedrect.debug=true;
}


function draw() {
  background(0);
  movingrect.x=World.mouseX;
  movingrect.y = World.mouseY;
  
  if(fixedrect.x-movingrect.x < fixedrect.width/2 + movingrect.width/2 &&
     movingrect.x-fixedrect.x < fixedrect.width/2 + movingrect.width/2 &&
     fixedrect.y-movingrect.y < fixedrect.height/2 + movingrect.height/2 &&
     movingrect.y-fixedrect.y < fixedrect.height/2 + movingrect.height/2 ){
       movingrect.shapeColor="red";
       fixedrect.shapeColor="red";

     }else
     {
      movingrect.shapeColor="green";
      fixedrect.shapeColor="green";

     }
  drawSprites();
}