const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var engine, world;
var blower,blowermouth,ball;
var button;



function setup() {
  createCanvas(850,600);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width/2+80, height/2-80, 80,80);
  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
  blowermouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90)
 
  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);
}

function draw() {
  background(59);  

  Engine.update(engine);

  blower.display();
  ball.display();
  blowermouth.display();

}
function blow () {
Matter.Body.applyForce(ball.body,{x: 0, y: 0}, {x: 0, y: 0.05});
}

