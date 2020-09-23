
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);
	


	engine = Engine.create();
	world = engine.world;

    ground= new Ground(800,150,330,20);

	bob1= new Bob(800,400);
	bob2= new Bob(850,400);
	bob3= new Bob(750,400);
	bob4= new Bob(900,400);
  bob5= new Bob(700,400);
  
  rope1 =new Rope(bob1.body,{x:800,y:150});
  rope2 =new Rope(bob2.body,{x:800,y:150});
  rope3 =new Rope(bob3.body,{x:800,y:150});
  rope4 =new Rope(bob4.body,{x:800,y:150});
  rope5 =new Rope(bob5.body,{x:800,y:150});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(20);

  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}
function keyPressed(){
if (keyDown("UP_ARROW")) { 
  console.log("hello");
  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-50,y:-45});
 }
}

