class Barrier{


constructor(){

}


writeBarrierPosition(){
database.ref('barrier').set({
'x':420,
'y':50
})

}

makeBarrier(){
var barrierRef = database.ref('barrier')
barrierRef.on("value",(data)=>{
 var position = data.val()
 if(position.x !== 0 && position.y !== 0){
if(frameCount%100===0)
{
 barriers.push(new Pole(420,50,40,200))
}}})   
}
writeBarrier2Position(){
    database.ref('barrier2').set({
    'x':420,
    'y':350
    })
    
    }
    
    makeBarrier2(){
    var barrier2Ref = database.ref('barrier2')
    barrier2Ref.on("value",(data)=>{
     var position2 = data.val()
     if(position2.x !== 0 && position2.y !== 0){
    if(frameCount%100===0)
    {
     barriers2.push(new Pole(420,350,40,200))

    }}})   
    }



}