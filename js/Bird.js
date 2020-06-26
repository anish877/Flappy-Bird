class Bird{

   
    constructor(x,y,width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,

        }
     
        this.body = Bodies.rectangle(x,y, 60,60, options);
        this.width = 60;
        this.height = 60;
        Matter.Body.setMass(this.body, this.body.mass * 2)
        this.image = loadImage('image/bird1.png')
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
       imageMode(CENTER);
       image(this.image,0,0, this.width, this.height);
      pop()
      }
      move(){
        var pushVec = Matter.Vector.create(0,-0.1)
        var posVec = Matter.Vector.create(birdSingle.body.position.x,birdSingle.body.position.y)
        Body.applyForce(birdSingle.body,posVec,pushVec)
      }
    }