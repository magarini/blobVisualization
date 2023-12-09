let artBlob;



function preload() {
  myFont = loadFont('fonts/Poppins-Regular.ttf');
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('width', '90%');

  textFont(myFont);

  artBlob = new Blobbo();
  artBlob.radius = height/4;
  artBlob.positionX = mouseX;
  artBlob.positionY = mouseY;
  artBlob.color = "#f9eeed";
  artBlob.textColor = "black";
  // artBlob.text = "art";
  artBlob.amplitude = 0.015;
  // artBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  artBlob.initialRadius = artBlob.radius;
  artBlob.scaledRadius =  artBlob.radius;


  
}

function draw() {
  background("#fff");
  // background("#000");

  artBlob.draw();
  artBlob.positionX = mouseX;
  artBlob.positionY = mouseY;
 
  
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //art
  artBlob.radius = windowWidth / 3;
  artBlob.positionX = windowWidth / 4;
  artBlob.positionY = windowHeight / 4;

}
