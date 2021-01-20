class Rain
{
constructor ()
{
    var m= {
       isStatic:false,
       friction: 0.2,
       density: 0.3
    }
    this.rain=Bodies.circle(random(0,400),0,25,m)
    World.add(myWorld,this.rain)
}
display()
{
    push ()
    translate(this.rain.position.x,this.rain.position.y)
  rotate (this.rain.angle) 
  fill ("blue") 
  ellipseMode(CENTER)
  ellipse(0,0,25/2)
  pop ()
}

}