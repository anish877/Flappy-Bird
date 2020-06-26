class Form{


constructor(){
  this.title = createElement('h3')
  this.input = createInput("NAME")
  this.button = createImg('image/playButton.png')
}
display(){
background(backgroundFormImg)
this.title.html(" MULPLAYER FLAPPY BIRD ")
this.title.position(90,140)
var col = color(172,209,29)
this.input.position(120,220)
this.input.style("color:white")
//this.input.textStyle(BOLD);
this.input.style('background-color', col);
this.button.position(110,250)
this.button.mousePressed(()=>
{
  this.title.hide()
  this.button.hide()
  this.input.hide()
  playerCount = playerCount + 1
  player.updatePlayerCount(playerCount)
  player.index = playerCount
  name = this.input.value()
  player.name = name
  player.updatePlayer()
  textFont(textStyle)
  stroke(3)
  textSize(25)
  fill(250,205,4)
  text(" WAIT FOR OTHER PLAYER TO JOIN " ,40,200)
})
}
hide(){
  this.title.hide()
  this.button.hide()
  this.input.hide()
}














}