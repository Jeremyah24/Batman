class Man
{
constructor ()
{
    var m= {
       isStatic:true 
    }
    this.man=Bodies.rectangle(200,300,200,200,m)
    World.add(myWorld,this.man)
}
display()
{
    push ()
    
  rotate (this.man.angle)  
  imageMode(CENTER)
  image(walkingman,200,300,200,200)
  pop ()
}

}