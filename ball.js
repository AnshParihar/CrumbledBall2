class Ball {
    constructor(x,y,radius){
        var options ={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,radius)
        World.add(world,this.body)
        this.radius = radius
        this.image = loadImage("Ball.png")
    }
    display(){
        //ellipseMode(RADIUS);
        //ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
        imageMode(CENTER)
        var pos = this.body.position
        translate(pos.x,pos.y)
        image(this.image,0,0,this.radius*2,this.radius*2)
    }
}