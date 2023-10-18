// p5.play is initiated by Paolo Pedercini | molleindustria.org | @molleindustria
// Examples are ported from http://molleindustria.github.io/p5.play/examples/index.html

// different ways to create sprites
var boxSprite;

var imageSprite;
var img;

var animatedSprite;
var animation


let techBlob;
let techImg;

function preload(){
	img = loadImage('sprites/staticBlob.png');
	techImg=loadImage('sprites/Vector(2).png');

	
	//create a sprite and associate an existing image as visual component
  //it is not necessary to specify the dimensions
  imageSprite = createSprite(windowWidth/2, windowHeight/2);
  imageSprite.addImage(img);

  techBlob=createSprite(200, 200)
//   techBlob.addImage(techImg);

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

 
//   drawSprites();
  techBlob.draw()

  if (techBlob.mouse.hovering()) mouse.cursor = 'grab';
  else mouse.cursor = 'default';

  if (techBlob.mouse.dragging()) {
	techBlob.moveTowards(
		mouse.x + techBlob.mouse.x,
		mouse.y + techBlob.mouse.y,
		1 // full tracking
	);
}
}