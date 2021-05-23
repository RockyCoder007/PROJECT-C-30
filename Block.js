class Block{
  constructor(x, y, width, height, angle) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.image=loadImage("block.jpg")
    this.image2=loadImage("line.jpg")
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visiblity=255;
  }
  display(){


  
    if((this.body.speed)<2.5){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill("green")
      imageMode(CENTER);
      pop();
    
    
    }


    if((this.body.speed)<3){
      imageMode(CENTER)
      image(this.image,this.body.position.x,this.body.position.y,width,height)
      push();
      imageMode(CENTER)
      image(this.image2,this.body.position.x-(width/2)+2,this.body.position.y,4,height)
      image(this.image2,this.body.position.x+(width/2)-2,this.body.position.y,4,height)
      image(this.image2,this.body.position.x,this.body.position.y-(height/2)+2,width,4)
      image(this.image2,this.body.position.x,this.body.position.y+(height/2)-2,width,4)
    }
    else{
      World.remove(world,this.body);

      
      this.Visiblity=this.Visiblity-5;
      tint(255,this.Visiblity)
      pop();

      //do nothing
      
      
      
      }
   
    
  }
}
