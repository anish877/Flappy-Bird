class Menu{



constructor(){
this.multiplayerButton = createImg('image/multiplayer.png')
this.shopButton = createImg('image/shop.png')
this.singleplayerButtton = createImg('image/singlePlayer.png')
}



display(){
    background(backgroundMenuImg)
this.multiplayerButton.position(130,230)
this.shopButton.position(150,280)
this.singleplayerButtton.position(170,80)
this.singleplayerButtton.mousePressed(()=>{

    var menuButton = createImg('image/back.png')
    menuButton.position(15,15)
    menuButton.mousePressed(()=>{
        menuButton.hide()
    World.remove(world,birdSingle.body)
    World.remove(world,ground.body)
    for(var i=0;i<poles.length;i++ ){
      World.remove(world,poles[i].body)
    }
    for(var i=0;i<poles2.length;i++ ){
      World.remove(world,poles2[i].body)
    }
    game = new Game()
    barrier = new Barrier()
    menu = new Menu()
    singlePlayer = new PlaySingle()
    ground = new Ground(200,height,400,20)
    healthValue = []
    redParticles = []
    greenParticles = []
    healthValue = 4
    for(var i = 0;i<5;i++)
    {
      health.push(new Health(380 - (i*28),30));
    }
    menu.display()
    game.getGameState()
    //game.login()
    barrier.writeBarrier2Position()
    barrier.writeBarrierPosition()
        poles = []
    poles2 = []    
    })
    this.shopButton.hide()
    this.multiplayerButton.hide()
    this.singleplayerButtton.hide()
    birdSingle = new Bird(200,20,40,40)
    birdSingle.image = birdSingleImg
    singleState = 1
})
this.multiplayerButton.mousePressed(()=>
{
    if(gameState===0){
        this.shopButton.hide()
        this.multiplayerButton.hide()
        this.singleplayerButtton.hide()
        player = new Player();
        player.getPlayerCount();
        form = new Form()
        form.display(); 
  bird1 = new Bird(50,200,40,40)
  bird2 = new Bird(100,200,40,40)
  birds = [bird1,bird2]
    }})
this.shopButton.mousePressed(()=>
{   this.shopButton.hide()
    this.multiplayerButton.hide()
    this.singleplayerButtton.hide()
     bird1Button = createImg('image/bird1.png')
     bird2Button = createImg('image/bird3.png')
     var backButton = createImg('image/back.png')
    // var bird3Button
    // var bird4Button
    // var bird5Button
    // var bird6Button
    // var bird7Button
    // var bird8Button
    bird1Button.position(50,200)
    bird2Button.position(250,200)
    bird1Button.mousePressed(()=>{
    birdSingle.image = cloneImg
    })
    bird2Button.mousePressed(()=>{
    birdSingle.image = crownImg
    })
    backButton.position(50,30)
    backButton.mousePressed(()=>{
        backButton.hide()
        bird1Button.hide()
        bird2Button.hide()
        game = new Game()
        barrier = new Barrier()
        menu = new Menu()
        menu.display()
        game.getGameState()
        //game.login()
        barrier.writeBarrier2Position()
        barrier.writeBarrierPosition()
    })
    bird2Button.mousePressed(()=>{
    birdSingleImg = loadImage('image/bird3.png')
    backButton.hide()
    bird1Button.hide()
    bird2Button.hide()
    game = new Game()
    barrier = new Barrier()
    menu = new Menu()
    menu.display()
    game.getGameState()
    //game.login()
    barrier.writeBarrier2Position()
    barrier.writeBarrierPosition()
    })

})


}


}


