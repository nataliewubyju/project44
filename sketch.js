var ground;
var shrek, shrekAnimation;
var cloudImage;


function preload() {
  groundImage = loadImage("assets/ground.png");
  shrekbackground = loadImage("assets/shrekbackground.webp");
  shrekAnimation = loadAnimation("assets/shrek01.png", "assets/shrek02.png", "assets/shrek03.png", "assets/shrek04.png");
  cloudImage = loadImage("assets/cloud2.png")
}

function setup() {
  createCanvas(800, 350)

  ground = createSprite(width / 2, height + 10, width, 2);
  ground.addImage("ground", groundImage);
  ground.x = width / 2 + 800;
  ground.velocityX = -5;

  shrek = createSprite(100, height - 100)
  shrek.addAnimation("shrek", shrekAnimation);
  shrek.scale = 0.4
}

function draw() {
  background(230)

  if (ground.x < 0) {
    ground.x = width / 2 + 800
  }

  spawnClouds()
  drawSprites()
}

function spawnClouds() {
  if (frameCount % 60 === 0){
    var cloud = createSprite(width, 50)
    cloud.y = Math.round(random(20,100))
    cloud.addImage("cloud", cloudImage);
    cloud.velocityX = -5;
    cloud.scale = 0.12;
    cloud.lifetime = 170;
  }

}