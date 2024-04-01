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
//   let element9=loadImage("backgrounds/Paint Layer 46.PNG");
//   let element10=loadImage("backgrounds/Paint Layer 55.PNG");
//   let element11=loadImage("digidear/Paint Layer 10.PNG");
//   let element12=loadImage("digidear/Paint Layer 11.PNG");
//   // to change
//   let element13=loadImage("tumblr/Paint Layer 10.PNG");
//   // tumblr
//   let element14=loadImage("tumblr/Paint Layer 2.PNG")
//   let element15=loadImage("tumblr/Paint Layer 3.PNG")
//   let element16=loadImage("tumblr/Paint Layer 4.PNG")
//   let element17=loadImage("tumblr/Paint Layer 5.PNG")
//   // to change
//   let element18=loadImage("tumblr/Paint Layer 16.PNG")
//   let element19=loadImage("tumblr/Paint Layer 8.PNG")
//   let element20=loadImage("tumblr/Paint Layer 9.PNG")
//   let element21=loadImage("tumblr/Paint Layer 10.PNG")
//   let element22=loadImage("tumblr/Paint Layer 11.PNG")
//   let element23=loadImage("tumblr/Paint Layer 13.PNG")
//   let element24=loadImage("tumblr/Paint Layer 14.PNG")
//   let element25=loadImage("tumblr/Paint Layer 15.PNG")
//   let element26=loadImage("tumblr/Paint Layer 16.PNG")

//   let element27=loadImage("digihistory-reorganizedlayers/Paint Layer 1.PNG")
//   let element28=loadImage("digihistory-reorganizedlayers/Paint Layer 3 Merged.PNG")
//   let element29=loadImage("digihistory-reorganizedlayers/Paint Layer 6.PNG")
//   let element30=loadImage("digihistory-reorganizedlayers/Paint Layer 7.PNG")
//   let element31=loadImage("digihistory-reorganizedlayers/Paint Layer 10.PNG")
//   let element32=loadImage("digihistory-reorganizedlayers/Paint Layer 11 Merged.PNG")
//   let element33=loadImage("digihistory-reorganizedlayers/Paint Layer 13.PNG")
//   let element34=loadImage("digihistory-reorganizedlayers/Paint Layer 17 Merged.PNG")
//   let element35=loadImage("digihistory-reorganizedlayers/Paint Layer 18 Merged.PNG")
//   let element36=loadImage("digihistory-reorganizedlayers/Paint Layer 19 Merged.PNG")
//   let element37=loadImage("digihistory-reorganizedlayers/Untitled23.png Merged.PNG")
//   let element38=loadImage("digihistory-reorganizedlayers/Paint Layer 22 Merged.PNG")
//   let element39=loadImage("digihistory-reorganizedlayers/Paint Layer 26.PNG")
//   let element40=loadImage("digihistory-reorganizedlayers/Paint Layer 38.PNG")
//   let element41=loadImage("digihistory-reorganizedlayers/Paint Layer 39.PNG")
//   let element42=loadImage("digihistory-reorganizedlayers/Paint Layer 41.PNG")
//   let element43=loadImage("digihistory-reorganizedlayers/Paint Layer 42.PNG")
//   let element44=loadImage("digihistory-reorganizedlayers/Paint Layer 45.PNG")
//   let element45=loadImage("digihistory-reorganizedlayers/Paint Layer 46.PNG")
//   let element46=loadImage("digihistory-reorganizedlayers/Paint Layer 47.PNG")
//   let element47=loadImage("digihistory-reorganizedlayers/Paint Layer 48.PNG")
//   let element48=loadImage("digihistory-reorganizedlayers/Paint Layer 52.PNG")
//   let element49=loadImage("digihistory-reorganizedlayers/Paint Layer 55.PNG")
//   let element50=loadImage("digihistory-reorganizedlayers/Untitled.png Merged.PNG")
//   let element51=loadImage("digihistory-reorganizedlayers/Paint Layer 57.PNG")
//   let element52=loadImage("digihistory-reorganizedlayers/Untitled5.png Merged.PNG")
//   let element53=loadImage("digihistory-reorganizedlayers/Paint Layer 58.PNG")
//   let element54=loadImage("digihistory-reorganizedlayers/Paint Layer 59.PNG")









//   elements=[
//     element0,element1,element2,element3,element4,element5,
//     element6,element7,element8,element9,element10,element11,
//     element12,element13,element14,element15,element16,element17,
//     element18,element19,element20,element21,element22,element23,
//     element24,element25,element26,element27,element28,element29,
//     element30,element31,element32,element33,element34,element35,
//     element36,element37,element38,element39,element40,element41,
//     element42,element43,element44,element45,element46,element47,
//     element48,element49,element50,element51,element52,element53,
//     element54];

  elements=[
    element0,element1,element2,element3,element4,element5,
    element6,element7,element8];

  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  windowAspect = width / height;




  //timeRenewal
//   setInterval(changePoemPosition, 8000);
  setInterval(addelementture, 3000);
  setInterval(restart,6000)


  image(elements[elementIndex],0, 0, windowWidth, windowHeight, 0, 0, elementW, elementH);

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
