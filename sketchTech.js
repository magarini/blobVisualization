let techBlob;

let gameBlob;

let developmentBlob;
let creativeCodingBlob;


function preload() {
  myFont = loadFont('fonts/Poppins-Regular.ttf');
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('width', '90%');

  textFont(myFont);

  

  techBlob = new Blobbo();
  techBlob.radius = windowWidth / 8;
  techBlob.positionX = windowWidth / 3+ random(100);
  techBlob.positionY = (68 / 100) * windowHeight+ random(100);
  techBlob.color = "#e3ece4";
  techBlob.textColor = "black";
  // techBlob.text = "tech";
  techBlob.amplitude = 0.03;
  // techBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  techBlob.initialRadius = techBlob.radius;
  techBlob.scaledRadius = 1.2 * techBlob.radius;

  

  gameBlob = new Blobbo();
  gameBlob.radius = windowWidth / 20;
  gameBlob.positionX = windowWidth / 2 + random(100);
  gameBlob.positionY = (28 / 100) * windowHeight + random(100);
  gameBlob.color = "#e3ece4";
  gameBlob.textColor = "black";
  // gameBlob.text = "games";
  gameBlob.amplitude = random(0.033);
  // gameBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  gameBlob.initialRadius = gameBlob.radius;
  gameBlob.scaledRadius = 1.2 * gameBlob.radius;

  

  developmentBlob = new Blobbo();
  developmentBlob.radius = windowWidth / 20;
  developmentBlob.positionX = (50 / 100) * windowWidth+ random(100);
  developmentBlob.positionY = (75 / 100) * windowHeight+ random(100);
  developmentBlob.color = "#e3ece4";
  developmentBlob.textColor = "black";
  // developmentBlob.text = "development";
  developmentBlob.amplitude = random(0.033);
  // developmentBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  developmentBlob.initialRadius = developmentBlob.radius;
  developmentBlob.scaledRadius = 1.2 * developmentBlob.radius;

 

  

  creativeCodingBlob = new Blobbo();
  creativeCodingBlob.radius = windowWidth / 20;
  creativeCodingBlob.positionX = windowWidth / 10;
  creativeCodingBlob.positionY = (55 / 100) * windowHeight;
  creativeCodingBlob.color = "#e3ece4";
  creativeCodingBlob.textColor = "black";
  // creativeCodingBlob.text = "creativeCoding";
  creativeCodingBlob.amplitude = random(0.033);
  // creativeCodingBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  creativeCodingBlob.initialRadius = creativeCodingBlob.radius;
  creativeCodingBlob.scaledRadius = 1.2 * creativeCodingBlob.radius;

  
}

function draw() {
  background("#fff");
  // background("#000");

 
  techBlob.draw();
  gameBlob.draw();
  developmentBlob.draw();
  creativeCodingBlob.draw();

  techBlob.mouseOver();
  gameBlob.mouseOver();
  developmentBlob.mouseOver();
  creativeCodingBlob.mouseOver();
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  

  //tech
  techBlob.radius = windowWidth / 5;
  techBlob.positionX = windowWidth / 2;
  techBlob.positionY = (3 * windowHeight) / 4;

 

  //games
  gameBlob.radius = windowWidth / 20;
  gameBlob.positionX = windowWidth / 2;
  gameBlob.positionY = windowHeight / 5;

 
  

  //development
  developmentBlob.radius = windowWidth / 20;
  developmentBlob.positionX = (4 * windowWidth) / 5;
  developmentBlob.positionY = (4 * windowHeight) / 5;

  
 
  //creativeCoding
  creativeCodingBlob.radius = windowWidth / 20;
  creativeCodingBlob.positionX = windowWidth / 10;
  creativeCodingBlob.positionY = (9 * windowHeight) / 10;

  
}
