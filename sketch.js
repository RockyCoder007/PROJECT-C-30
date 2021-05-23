const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform1=new Platform(390+100,300,230,10);
    platform2=new Platform(790+100,250,230,10);

    ball = new Ball(100,100);

    //log6 = new Log(230,180,80, PI/2);
    //level two
    block8 = new Block(330+100, 235, 30, 40) ;
    block9 = new Block (360+100, 235, 30, 40);
    block10 = new Block (390+100, 235, 30, 40);

    block11 = new Block( 420+100, 235, 30, 40) ;
    block12 = new Block (450+100, 235, 30, 40) ;
//level three
    block13 = new Block(360+100, 195, 30, 40);

    block14 = new Block (390+100, 195, 30, 40) ;
    block15 = new Block(420+100, 195, 30, 40) ;
    //top
    block16= new Block (390+100, 155, 30,40);
    //level one
    block16 = new Block(330+100, 275, 30, 40) ;
    block17 = new Block (360+100, 275, 30, 40);
    block18 = new Block (390+100, 275, 30, 40);
    block19 = new Block( 420+100, 275, 30, 40) ;
    block20 = new Block (450+100, 275, 30, 40) ;
    block21 = new Block (480+100, 275, 30, 40) ;
    block22 = new Block (300+100, 275, 30,40);
    //---------------------------------------
    //level two
    block23 = new Block(330+400+100, 235-50, 30, 40) ;
    block24 = new Block (360+400+100, 235-50, 30, 40);
    block25 = new Block (390+400+100, 235-50, 30, 40);

    block26 = new Block( 420+400+100, 235-50, 30, 40) ;
    block27 = new Block (450+400+100, 235-50, 30, 40) ;
    //level three
    block28 = new Block(360+400+100, 195-50, 30, 40);

    block29 = new Block (390+400+100, 195-50, 30, 40) ;
    block30 = new Block(420+400+100, 195-50, 30, 40) ;
    //top
    block31= new Block (390+400+100, 155-50, 30,40);
    //level one
    block32 = new Block(330+400+100, 275-50, 30, 40) ;
    block33 = new Block (360+400+100, 275-50, 30, 40);
    block34 = new Block (390+400+100, 275-50, 30, 40);
    block35 = new Block( 420+400+100, 275-50, 30, 40) ;
    block36 = new Block (450+400+100, 275-50, 30, 40) ;
    block37 = new Block (480+400+100, 275-50, 30, 40) ;
    block38 = new Block (300+400+100, 275-50, 30,40);

    slingshot = new SlingShot(ball.body,{x:200, y:50});
}

function draw(){
    background("black");
   // text(Math.round(mouseX) + ','+Math.round(mouseY),20,20);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    platform1.display();
    platform2.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    block33.display();
    block34.display();
    block35.display();
    block36.display();
    block37.display();
    block38.display();
    slingshot.display();
    ball.display();





  
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(ball.body);
    }
}