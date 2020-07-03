var ground,line1,balls;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1500, 500);
	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, 450, width,10);
	groundSprite.shapeColor=color(255)
	ground = Bodies.rectangle(width/2, 450, width, 10 , {isStatic:true} );
	World.add(world, ground);

	groundV=createSprite(width, 450, 10, 1000);
	groundV.shapeColor=color(255);
	ground = Bodies.rectangle(width, 450, 10, 1000 , {isStatic:true} );
	World.add(world, ground);


	line1 = new Line(1300,440,200,10);
	line2 = new Line(1200,400,10,100);
	line3 = new Line(1400,400,10,100);
	balls = new Ball(100,300,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  line1.display();
  line2.display();
  line3.display();
  balls.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(balls.body,balls.body.position,{x:85,y:-85});
	   
	 }
   }
   
   