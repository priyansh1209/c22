//nameSpacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball
var ball2

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var options ={
        restitution: 1
    }
    
    var ballOptions ={
        restitution: 1.5
    }
    
    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    ball = Bodies.circle(305,200,10,options);
    World.add(world,ball);
    
    ball2 = Bodies.circle(150,100,20,ballOptions);
    World.add(world,ball2);
    
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    fill('blue');
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,10,10)

    fill('red');
    ellipseMode(RADIUS)
    ellipse(ball2.position.x,ball2.position.y,20,20)

}