class Game{


constructor(){

}


getGameState(){
Engine.update(engine)
var gameStateRef = database.ref('gameState')
gameStateRef.on("value",(data)=>{
    gameState = data.val()
})
}

updateGameState(state){
database.ref('/').update({
  gameState:state
})
}
 login(){

}
play(){
    form.hide()
    background(backgroundImage)
    Player.getPlayerInfo()

    if(allPlayers !== undefined){
        var index = 0;
        var x = 0 ;
        var y ;
        for(var plr in allPlayers){
            index = index + 1 ;
            x = birds[index-1].body.position.x  
            y = birds[index-1].body.position.y
            if( allPlayers[plr].push===true)
            {
              var pushVec = Matter.Vector.create(0,-15)
              var posVec = Matter.Vector.create(x,y)
              Matter.Body.applyForce(birds[index-1].body,posVec,pushVec)
              player.distance =  birds[index-1].body.position.y  
            }
            birds[index-1].body.position.x = x;
            birds[index-1].body.position.y = y;

            if (index === player.index){
                birds[index - 1].shapeColor = "red";

            }

        }

    }
    for(var i = 0;i<birds.length;i++)
    {
      birds[i].display()
    }
    for(var i = 0;i<barriers.length;i++)
    {
      barriers[i].image =  barrier1Img
      barriers[i].display()
      barriers[i].move()
    }
    for(var i = 0;i<barriers2.length;i++)
    {
      barriers2[i].display()
      barriers2[i].move()
    }
     randomY = round((random(+20,-20)))
     barrier1x = 420
     barrier1y = 50
     barrier1y = barrier1y + randomY
    //  barrier.writeBarrierPosition(barrier1x,barrier1y)
     //barrier1.velocityX = -10
    
     barrier2x = 420
     barrier2y = 350 
     barrier2y = barrier2y - randomY
    //  barrier.writeBarrier2Position(barrier2x,barrier2y)
     //barrier1.velocityX = -10


     if(keyIsDown(UP_ARROW) && player.index !== null){
        player.push = true
        player.updatePlayer();
      }
      else{
        player.push = false
        player.updatePlayer();
      }
      // if(keyIsDown(DOWN_ARROW) && player.index !== null){
      //   player.distance -=10
      //   player.updatePlayer();
      // }
      if(player.distance > 400){
        gameState = 2;
      }
 
    

}
}