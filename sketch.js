const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

    var ball_options = {
        restitution:1
    }

   ground= Bodies.rectangle(200,390,40,40,object_options);
    World.add(world,ground);

    ball = Bodies.circle(200,80,40,ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,40);
    ellipseMode(CENTER);
    ellipse(ball.position.x,ball.position.y,20);
}
