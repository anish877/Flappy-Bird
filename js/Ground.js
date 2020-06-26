class Ground{

   
    constructor(x,y,width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:true

        }
     
        this.body = Bodies.rectangle(x,y, width, height, options);
        this.width = width;
        this.height = height;
        // this.image = loadImage('image/bird3.png')
        World.add(world, this.body);
      }
      display(){
       var pos = this.body.position;
       var angle = this.body.angle;
       push()
       strokeWeight(2)
       stroke("black")
       fill("white")
       translate(this.body.position.x,this.body.position.y)
       rotate(angle)
       rectMode(CENTER);
       rect(0,0, this.width, this.height);
      pop()
      }
    }