const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var canvas
var gameState  = 0;
var singleState ;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var indexValue 
var index  = 0
var count = 0
var player
var form
var game
var singlePlayer
var barrier1,barrier2
var barrier
var pole
var barriers = []
var barriers2 = []
var barrier1Img
//var y
var randomY
var bird1,bird2,birds
var birdSingle
var bird1Img,bird2Img
var barrier1x,barrier1y
var barrier2x,barrier2y
var backgroundImage
var backgroundFormImg,backgroundMenuImg
var textStyle;
var bird1Button
var bird2Button
var menu
var crownImg,cloneImg
var gameOverImg
var ground
var login
var joinUsername
var playerAccount
var playerGame
var poles = []
var poles2 = []
var birdSingleImg
var particles = []
var health = []
var txtFont
var interval = 0
var healthValue =  4
var c
var healthImage
var position1 = 0
var position2 = 1
var position3 = 3
var greenParticles = []
var redParticles = []
var healthCoin = []
function preload(){
barrier1Img = loadImage('image/barrier1.png')
barrier2Img = loadImage('image/barrier2.png')
backgroundImage = loadImage('image/background.png')
backgroundFormImg = loadImage('image/backgroundForm.jpg')
bird1Img = loadImage('image/bird1.png')
bird2Img = loadImage('image/bird3.png')
textStyle = loadFont('Fonts/BigSpace-rPKx.ttf')
txtFont = loadFont('Fonts/ARCADECLASSIC.TTF')
crownImg = loadImage('image/bird3.png')
backgroundMenuImg = loadImage('image/bac.jpg')
gameOverImg = loadImage('image/gameOver.png')
birdSingleImg = loadImage('image/bird1.png')
healthImage  = loadImage('image/health.png')
}


function setup(){
  canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  canvas = createCanvas(400,400);
  database = firebase.database();
  login = new Login()
  login.display()
  playerAccount = new SinglePlayer()
  for(var i = 0;i<5;i++)
  {
    health.push(new Health(380 - (i*28),30));
  }
}


function draw(){
  Engine.update(engine);
  //console.log(playerAccount)
//console.log(gameState)
checkPlayerCount()
if(singleState===1){
clear()
singlePlayer.play()
for(var i = 0;i<health.length;i++)
{
  health[i].display()
}
for(var i  = 0;i< redParticles.length;i++)
{ c = color(255,0,0)
  redParticles[i].show()
  redParticles[i].update()
  if(redParticles[i].finished())
{
  redParticles.splice(i,1)
}

}
for(var i  = 0;i< greenParticles.length;i++)
{ c = color(0,181,4)
  greenParticles[i].show()
  greenParticles[i].update()
  if(greenParticles[i].finished())
{
  greenParticles.splice(i,1)
}

}
for(var i = particles.length-1;i>=0;i--)
{
c = 255
particles[i].show()
particles[i].update()
if(particles[i].finished())
{
  particles.splice(i,1)
}
}
}

if(gameState===1)
{
  clear()
  barrier.makeBarrier()
  barrier.makeBarrier2()
  game.play()

}

}
function checkPlayerCount(){

    if(playerCount===2)
    {
        gameState = 1
        game.updateGameState(gameState)
    }

}

function mouseDragged(){
if(singleState===1)
  {
      var pushVec = Matter.Vector.create(0,-8)
      var posVec = Matter.Vector.create(birdSingle.body.position.x,birdSingle.body.position.y)
      Matter.Body.applyForce(birdSingle.body,posVec,pushVec)
      particles.push(new Particle(birdSingle.body.position.x,birdSingle.body.position.y+10))
  }

}
function keyPressed(){
  if(keyCode===32){
  if(singleState===0)
  {

    World.remove(world,birdSingle.body)
    World.remove(world,ground.body)
    singlePlayer = new PlaySingle()
    birdSingle = new Bird(200,200,40,40)
    birdSingle.image = birdSingleImg
    ground = new Ground(200,height,400,20)
    healthValue = []
    redParticles = []
    greenParticles = []
    healthValue = 4
    for(var i = 0;i<5;i++)
    {
      health.push(new Health(380 - (i*28),30));
    }
    for(var i=0;i<poles.length;i++ ){
      World.remove(world,poles[i].body)
    }
    for(var i=0;i<poles2.length;i++ ){
      World.remove(world,poles2[i].body)
    }
    poles = []
    poles2 = []
    singleState = 1
  }}
}
class Particle {

constructor(x,y){
  this.x = x
  this.y = y
  this.vy = random(-2,0)
  this.vx = random(-1,1)
  this.alpha = 255
}
finished(){
  return this.alpha<0 
}
show(){
  noStroke()
  fill(c,this.alpha)
  ellipse(this.x,this.y,10)
}

update()
{
  this.x += this.vy
  this.y += this.vx 
  this.alpha -= 5
}
}
class Health{

constructor(x,y)
{
  this.x = x
  this.y = y
  this.image = healthImage
}
display(){
  noStroke()
  fill("red")
  imageMode(CENTER)
  image(healthImage,this.x,this.y,30,30)
}
}

