var starImg, fairyImg, fairyleftImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	fairyleftImg = loadAnimation("fairyImage1 left.png","fairyImage2 left.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, windowHeight);

	fairyVoice.play();

	fairy = createSprite(130, height-180);
	fairy.addAnimation("fairyflying",fairyImg);
	fairy.addAnimation("fairyflyingleft",fairyleftImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y > 400){
  	Matter.Body.setStatic(starBody,true);
  }
 if(keyDown("RIGHT_ARROW")){
	fairy.changeAnimation("fairyflying",fairyImg);
	fairy.x = fairy.x + 10;
	fairy.scale =0.25;
}

 if(keyDown("LEFT_ARROW")){
	 fairy.changeAnimation("fairyflyingleft",fairyleftImg);
	fairy.x = fairy.x - 10;
	fairy.scale =0.85;
}

if (fairy.x > 509 && fairy.x < 541 && star.y < 400) {
 Matter.Body.setStatic(starBody,false); 
}

  drawSprites();

}
