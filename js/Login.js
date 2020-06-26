class Login{



constructor(){
this.input = createInput('Username')
this.createNew = createButton('CREATE')
this.join = createButton('JOIN')
}



 display(){

this.input.position(200,200)
this.createNew.position(80,300)
this.join.position(180,300)
this.createNew.mousePressed(()=>{
    this.input.hide()
    this.createNew.hide()
    this.join.hide()
    var createUsername = this.input.value()
    playerAccount.name = createUsername
    playerAccount.getAccount(createUsername)
    playerAccount.updateAccount() 
    playerAccount.level   = playerGame.level
    playerAccount.coin    = playerGame.coin 
    game = new Game()
    barrier = new Barrier()
    menu = new Menu()
    singlePlayer = new PlaySingle()
    ground = new Ground(200,height,400,20)
    menu.display()
    game.getGameState()
    //game.login()
    barrier.writeBarrier2Position()
    barrier.writeBarrierPosition()
})


}

}