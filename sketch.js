const Engine= Matter.Engine
const World = Matter.World
const Bodies= Matter.Bodies
var thunder1image,thunder2image,thunder3image,thunder4image
var thunderSprite
var walkingman
var myEngine,myWorld
var man
var rain
var droplets=[]
function preload(){
 thunder1image= loadImage("1.png")   
 thunder2image= loadImage("2.png")
 thunder3image= loadImage("3.png")
 thunder4image= loadImage("4.png")
 walkingman= loadImage("walking_3.png")

}

function setup(){


  createCanvas(400,400) 
    myEngine= Engine.create()
    myWorld= myEngine.world;
    man=new Man()
    Engine.run(myEngine)
}

function draw(){
    background("black")
    Engine.update(myEngine)
man.display()
for(var i=0;i<100;i=i+1){
rain= new Rain()
droplets.push(rain)
}
for(var i=0;i<droplets.length;i=i+1){
    droplets[i].display()
    }
    populate()
    drawSprites()
}   
function populate(){
     if(frameCount% 20==0)
     {

     
    thunderSprite= createSprite(100,0,100,100)
     thunderSprite.x= random(20,380)
    var f= Math . round ( random(1,4))
    console.log(f)
     switch(f)
     {
         case 1: thunderSprite. addImage(thunder1image)
         break
         case 2: thunderSprite. addImage(thunder2image)
         break
         case 3: thunderSprite. addImage(thunder3image)
         break
         case 4: thunderSprite. addImage(thunder4image)
         break




     

     } 
     thunderSprite.lifetime=5
     thunderSprite.scale= 0.5
     }
}
