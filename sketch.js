const Bodies = Matter.Bodies
const World = Matter.World
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var engine
var world
var ground,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15
var box16,box17,box18,box19,box20,box21,box22,box23,box24,box25

var polygon;
var img;

function preload(){
img = loadImage("hexagon (1).png");

}
function setup() {
  createCanvas(1000,600);
  
 engine=Engine.create()
 world = engine.world;

 ground = new Ground(400,420,300,20)
 ground2 = new Ground(800,290,300,20)
 ground3 = new Ground(500,590,width,10)
  
box1 = new Block(330,390,30,40)
box2 = new Block(360,390,30,40)
box3 = new Block(390,390,30,40)
box4 = new Block(420,390,30,40)
box5 = new Block(450,390,30,40)
box6 = new Block(345,350,30,40)
box7 = new Block(375,350,30,40)
box8 = new Block(405,350,30,40)
box9 = new Block(435,350,30,40)
box10 = new Block(360,310,30,40)
box11 = new Block(390,310,30,40)
box12= new Block(420,310,30,40)
box13 = new Block(375,270,30,40)
box14= new Block(405,270,30,40)
box15 = new Block(390,230,30,40)

box16 = new Block(750,260,30,40)
box17 = new Block(780,260,30,40)
box18 = new Block(810,260,30,40)
box19 = new Block(840,260,30,40)
box20 = new Block(765,220,30,40)
box21 = new Block(795,220,30,40)
box22 = new Block(825,220,30,40)
box23 = new Block(780,180,30,40)
box24 = new Block(810,180,30,40)
box25 = new Block(795,140,30,40)

polygon = Bodies.circle(50,200,20 )
World.add(world,polygon)

chain = new  Chain(this.polygon,{x:100,y:400});
  Engine.run(engine)
}

function draw() {
  background("black"); 
  Engine.update(engine)
  ground.display();
  ground2.display();
  ground3.display();
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
box20.display()
box21.display()
box22.display()
box23.display()
box24.display()
box25.display()

imageMode(CENTER);
image(img,polygon.position.x,polygon.position.y,40,40);

chain.display();

}
function mouseDragged(){
Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
chain.fly();
}

