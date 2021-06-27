const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1, pig1;

var bkgImg;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70); 
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    box6 = new Box(700,120,70,70);
    box7 = new Box(700,100,70,70);
    box8 = new Box(700,70,70,70);
    
    ball = new Ball(200,200,50);
    slingShot =  new SlingShot(ball.body,{x:550,y:50});

}

function draw(){
    background("lightblue");
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
   
    box3.display();
    box4.display();
    

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    ball.display();
    slingShot.display();
}

function mouseDragged(){
    
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
   
}