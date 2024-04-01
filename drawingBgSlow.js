let windowAspect;
let w, h;

let elementW,elementH;


//images
let elements=[];
let elementIndex=0;

function preload() {


  let element0=loadImage("backgrounds/Paint Layer 6.PNG");
  let element1=loadImage("backgrounds/Paint Layer 39.PNG");
  let element2=loadImage("backgrounds/Paint Layer 45.PNG");
  let element3=loadImage("backgrounds/Paint Layer 48.PNG");
  let element4=loadImage("backgrounds/Paint Layer 55.PNG");
  let element5=loadImage("backgrounds/Paint Layer 2.PNG");
  let element6=loadImage("backgrounds/Paint Layer 46.PNG");
  let element7=loadImage("backgrounds/Paint Layer 10.PNG");
  let element8=loadImage("backgrounds/Paint Layer 9.PNG");


  elements=[
    element0,element1,element2,element3,element4,element5,
    element6,element7,element8];

  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  windowAspect = width / height;
  image(elements[elementIndex],0, 0, windowWidth, windowHeight, 0, 0, elementW, elementH);

  setInterval(addelementture, 3000);
  setInterval(restart,6000)

}





function draw() {

 

  //adding elements
  for (i=0; i<elementIndex; i++){
    console.log('problem',elementIndex)
    let imageAspect = elements[elementIndex].width / elements[elementIndex].height;
  // This code naively crops the bottom or right edge of the image as necessary. Obviously there are other ways to limit the image size.
  if (windowAspect >= imageAspect) {
    // Our window is wider than our image, we need to constrain the height of the image
    elementW = elements[elementIndex].width;
    elementH =  elementW / windowAspect;
  } else {
    // Our window is narrower than or image, we need to constrain the width of the image
    elementH = elements[elementIndex].height;
    elementW = elementH * windowAspect;
  }

  imageMode(CORNER);
  image(elements[elementIndex],0, 0, windowWidth, windowHeight, 0, 0, elementW, elementH);
  }





}

function restart(){
clear()
image(elements[random(elements.length)],0, 0, windowWidth, windowHeight, 0, 0, elementW, elementH);

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
