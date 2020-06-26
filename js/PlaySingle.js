class PlaySingle{


constructor(){

}




play(){
Engine.update(engine);
background(backgroundImage)
//birdSingle = new Bird(100,200)
birdSingle.display()
ground.display()
if(frameCount%100===0)
{ var r = round(random(1,10))
  if(r===3)
  {
  healthCoin.push(new Heart(420,200,10,10))
  }
  poles.push(new Pole(420,320,40,140))
}
for(var i=poles.length-1;i>=0;i-- )
{
  poles[i].display()
  poles[i].move()
  if(poles[i].x < 400)
  {
    poles.splice(i,1)
  }
}
for(var i = 0;i<healthCoin.length;i++)
{ 

  healthCoin[i].display()
  healthCoin[i].move()
}
for(var i = 0;i<healthCoin.length;i++)
{
  var healthCollided = Matter.SAT.collides(birdSingle.body,healthCoin[i].body)
  if(healthCollided.collided)
  { World.remove(world,healthCoin[i].body)
    healthCoin.splice(i,1)
     health = []
    healthValue =4 
    for(var j = 0;j<=healthValue;j++)
    {
      health.push(new Health(380 - (j*28),30))
    }
  }
}
if(frameCount%100===0)
{
  poles2.push(new Pole(420,70,40,140))
}
for(var i=poles2.length-1;i>=0;i-- )
{ poles2[i].image = barrier1Img
  poles2[i].display()
  poles2[i].move()
  if(poles2[i].x < 400)
  {
    poles2.splice(i,1)
  }
}
for(var i=0;i<poles2.length;i++ ){

var pole2Collided = Matter.SAT.collides(birdSingle.body,poles2[i].body)
if(pole2Collided.collided ){
  for(var j  = 0;j<=10;j++)
  {
  greenParticles.push(new Particle(poles[i].body.position.x,poles[i].body.position.y))
  }
  World.remove(world,poles[i].body)
  poles.splice(i,1)
  for(var j  = 0;j<=10;j++)
  {
  greenParticles.push(new Particle(poles2[i].body.position.x,poles2[i].body.position.y))
  }
  World.remove(world,poles2[i].body)
  for(var j  = 0;j<=10;j++)
  {
  redParticles.push(new Particle(370-(healthValue*24),30))
  }
    poles2.splice(i,1)
  health.splice(healthValue,1)
  healthValue -= 1
  if(healthValue===-1)
  {

    image(gameOverImg,25,50)
    particles = []
    textFont(txtFont)
    stroke(3)
    textSize(25)
    fill(250,205,4)
    text("PRESS  SPACE  TO  RESTART",60,350)
    singleState = 0
}}
}
for(var i=0;i<poles.length;i++ ){
  var pole1Collided = Matter.SAT.collides(birdSingle.body,poles[i].body)
  if(pole1Collided.collided ){
    for(var j  = 0;j<=10;j++)
    {
    greenParticles.push(new Particle(poles[i].body.position.x,poles[i].body.position.y))
    }
    World.remove(world,poles[i].body)
    poles.splice(i,1)
    for(var j  = 0;j<=10;j++)
    {
    greenParticles.push(new Particle(poles2[i].body.position.x,poles2[i].body.position.y))
    }
    World.remove(world,poles2[i].body)
    for(var j  = 0;j<=10;j++)
    {
    redParticles.push(new Particle(370,20))
    }
    poles2.splice(i,1)
    health.splice(healthValue,1)
    healthValue -= 1
    interval = 1
    if(healthValue===-1)
    {
      image(gameOverImg,5,50)
      particles = []
      textFont(txtFont)
      stroke(3)
      textSize(25)
      fill(250,205,4)
      text("PRESS  SPACE  TO  RESTART",60,350)
      singleState = 0
    }  
  }
}
if(keyIsDown(UP_ARROW)){
var pushVec = Matter.Vector.create(0,-20)
var posVec = Matter.Vector.create(birdSingle.body.position.x,birdSingle.body.position.y)
Matter.Body.applyForce(birdSingle.body,posVec,pushVec)
particles.push(new Particle(birdSingle.body.position.x,birdSingle.body.position.y+10))
}}

}