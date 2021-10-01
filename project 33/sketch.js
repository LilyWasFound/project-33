const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var backgroundIMG;
var snow;

function preload(){
  backgroundIMG = loadImage("snow4.jpg");
  
  }
  
  
function setup() {
	var canvas = createCanvas(700, 700);
  Engine = Engine.create();
  World = Engine.world;

snow = new Snow(100,100,30)

Engine.run(Engine);
}


function draw() {
  background(backgroundIMG);  

  
 snow.display();
}
