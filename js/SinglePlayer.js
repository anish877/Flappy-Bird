class SinglePlayer{



constructor(){

this.name = null
this.level = 0
this.coin = 0



}
getAccount(name){
    var account = 'accounts/' + name
var getAccountRef = database.ref(account);
getAccountRef.on("value",(data)=>{
    playerGame = data.val()
})
}

updateAccount(){
var accountName = 'accounts/' + this.name
database.ref(accountName).set({
 level:this.level,
 coin :this.coin
})
}



}