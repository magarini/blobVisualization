

let artBlob;



function preload() {
  myFont = loadFont('/fonts/Poppins-Regular.ttf');
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  let button = select('.sticker');

  var cnv = createCanvas(200, 200);
  cnv.style('width', '90%');

  button.child(cnv);


  textFont(myFont);

  artBlob = new Blobbo();
  artBlob.radius = 90;
  artBlob.positionX = 100;
  artBlob.positionY =  100;
  artBlob.color = "#EFC7C2";
  artBlob.textColor = "black";
  artBlob.amplitude = 0.015;
  artBlob.initialRadius = artBlob.radius;
  artBlob.scaledRadius = 1.2 * artBlob.radius;
  artBlob.fontSize=24;


}

function draw() {
//   background("#000");
  clear();
  artBlob.draw();
//   artBlob.mouseOver();

  // if(mouseIsPressed===true){
  //   artBlob.scaleRadius();
  // }
}

// function mousePressed() {
//   artBlob.clicked();

// }

function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
//   //art
//   artBlob.radius = windowWidth / 3;
//   artBlob.positionX = windowWidth / 4;
//   artBlob.positionY = windowHeight / 4;


}
