const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var snow, snow2, snow3, snow4, snow5;
var snowfl, snowfl2, snowfl3, snowfl4, snowfl5;

function preLoad() {
  backgroundImg = loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  snow = new snow (750,380, 10,10)
  snow2 = new snow (750,380, 10,10)
  snow3 = new snow (750,380, 10,10)
  snow4 = new snow (750,380, 10,10)
  snow5 = new snow (750,380, 10,10)

  snowfl = new snowfl (600, 390,5,5)
  snowfl2 = new snowfl (600, 390,5,5)
  snowfl3 = new snowfl (600, 390,5,5)
  snowfl4 = new snowfl (600, 390,5,5)
  snowfl5 = new snowfl (600, 390,5,5)
  
}

function draw() {
if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);

    snow.display();
    snow2.display();
    snow3.display();
    snow4.display();
    snow5.display();

    snowfl.display();
    snowfl2.display();
    snowfl3.display();
    snowfl4.display();
    snowfl5.display();
    
  drawSprites();
}