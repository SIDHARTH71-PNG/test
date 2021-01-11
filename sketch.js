const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var forestImg;
var player1;



function preload()
{
forestImg=loadImage("WallpaperDog-17001210.jpg");
}

function setup()
{
createCanvas(1200,600); 
engine=Engine.create();
world=engine.world;
player1=new Player(50, 200); 

}


function draw()
{
 background(forestImg);
 Engine.update(engine);
 player1.display();
}

function keyPressed()
{
    if(keyCode === 75)
    {
     player1.left();
    }
    if(keyCode === 32)
    {
    player1.right();
    }
    
}