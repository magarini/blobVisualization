let windowAspect;
let elementW,elementH;
let elements=[];
let elementIndex=0;
var r;
var g;

function preload() {
  let element0=loadImage("backgrounds/Paint Layer 6.PNG");
  let element1=loadImage("backgrounds/Paint Layer 39.PNG");
  let element2=loadImage("backgrounds/Paint Layer 45.PNG");
  // let element3=loadImage("backgrounds/Paint Layer 48.PNG");
  let element4=loadImage("backgrounds/Paint Layer 55.PNG");
  let element5=loadImage("backgrounds/Paint Layer 2.PNG");
  let element6=loadImage("backgrounds/Paint Layer 46.PNG");
  let element7=loadImage("backgrounds/Paint Layer 9.PNG");

  elements=[
    element0,element1,element2,element4,element5,
    element6,element7];
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  windowAspect = width / height;
  image(elements[elementIndex],0, 0, windowWidth, windowHeight, 0, 0, elementW, elementH);
  setInterval(addelementture, 3000);
  setInterval(restart,5000)
  r = random(220,255);
  g = random(220,255);
}

function draw() {
  for (i=0; i<elementIndex; i++){
    console.log('problem',elementIndex)
    let imageAspect = elements[elementIndex].width / elements[elementIndex].height;
  if (windowAspect >= imageAspect) {
    elementW = elements[elementIndex].width;
    elementH =  elementW / windowAspect;
  } else {
    elementH = elements[elementIndex].height;
    elementW = elementH * windowAspect;
  }
  imageMode(CORNER);
  image(elements[elementIndex],0, 0, windowWidth, windowHeight, 0, 0, elementW, elementH);
  }
  noStroke()
  fill(r,g,255)
  ellipse(mouseX,mouseY,200)
}

function restart(){
clear()
image(elements[random(elements.length)],0, 0, windowWidth, windowHeight, 0, 0, elementW, elementH);
r = random(220,255);
g = random(220,255);
}

function addelementture(){
  elementIndex++;
  if (elementIndex>=elements.length){
    elementIndex=0;
  }
}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  windowAspect = width / height;

}
