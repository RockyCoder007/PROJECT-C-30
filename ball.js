class Ball{
  constructor(x, y,angle) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    width=46;
    height=40
    this.image=loadImage("yellow hexagon.png");
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height=height


    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    fill("yellow")
    image(this.image,0, 0, this.width,this.height);
    pop();
  }
}
