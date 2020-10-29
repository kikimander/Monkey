
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score = 0
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.15
  
  ground = createSprite(300, 350, 600, 10 )
  
  
  foodGroup = new Group();
  obstaclesGroup = new Group();

  
}


function draw() {
background("white")
  
  score = score + 1
  textSize(36)
  fill("purple")
  text("Survival Time:" + score, 300, 50)
 
  if (keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  bananas();
  obstacles();
  
  drawSprites();
}

function bananas(){
  if (frameCount % 80 === 0){
    banana = createSprite(600, 250, 20, 20)
    banana.addImage(bananaImage)
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.y = Math.round(random(120,200));
foodGroup.add(banana);
  }
}

function obstacles(){
  if (frameCount % 300 === 0){
    obstacle = createSprite(600, 320, 20, 20)
    obstacle.addImage("obstacles", obstacleImage)
   obstacle.scale = 0.15;
    obstacle.velocityX = -3;
   obstaclesGroup.add(obstacle);
  }
}








