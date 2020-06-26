class Player{



constructor(){
this.index = null
this.distance = 0
this.name = 0
this.push = false
}

getPlayerCount(){
  var playerCountRef = database.ref('playerCount');
  playerCountRef.on("value",(data)=>{
    playerCount = data.val();
  })
}

updatePlayerCount(count){
  database.ref('/').update({
    playerCount: count
  })
}
updatePlayer(name){
  var player = "players/player" + this.index
  database.ref(player).set({
    name:this.name,
    distance:this.distance,
    push:this.push
  })
}

static getPlayerInfo(){
  var playerInfoRef = database.ref('players');
  playerInfoRef.on("value",(data)=>{
    allPlayers = data.val();
  })
}
}