let artBlob;


let gameBlob;
let illustrationBlob;

let netArtBlob;

let installationsBlob;
let movingImageBlob;
let threeDGraphics;


function preload() {
  myFont = loadFont('fonts/Poppins-Regular.ttf');
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('width', '90%');

  textFont(myFont);

  artBlob = new Blobbo();
  artBlob.radius = windowWidth / 7;
  artBlob.positionX = windowWidth / 3 + random(100);
  artBlob.positionY = (35 / 100) * windowHeight+ random(100);
  artBlob.color = "#f9eeed";
  artBlob.textColor = "black";
  // artBlob.text = "art";
  artBlob.amplitude = 0.015;
  // artBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  artBlob.initialRadius = artBlob.radius;
  artBlob.scaledRadius =  artBlob.radius;


  gameBlob = new Blobbo();
  gameBlob.radius = windowWidth / 20;
  gameBlob.positionX = windowWidth / 2 + random(100);
  gameBlob.positionY = (28 / 100) * windowHeight + random(100);
  gameBlob.color = "#f9eeed";
  gameBlob.textColor = "black";
  // gameBlob.text = "games";
  gameBlob.amplitude = random(0.033);
  // gameBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  gameBlob.initialRadius = gameBlob.radius;
  gameBlob.scaledRadius =  gameBlob.radius;

  illustrationBlob = new Blobbo();
  illustrationBlob.radius = windowWidth / 20;
  illustrationBlob.positionX = (55 / 100) * windowWidth + random(100);
  illustrationBlob.positionY = (40 / 100) * windowHeight + random(100);
  illustrationBlob.color = "#f9eeed";
  illustrationBlob.textColor = "black";
  // illustrationBlob.text = "illustrations";
  illustrationBlob.amplitude = random(0.033);
  // illustrationBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  illustrationBlob.initialRadius = illustrationBlob.radius;
  illustrationBlob.scaledRadius =  illustrationBlob.radius;

  netArtBlob = new Blobbo();
  netArtBlob.radius = windowWidth / 20;
  netArtBlob.positionX = windowWidth / 6+ random(100);
  netArtBlob.positionY = (3 * windowHeight) / 6+ random(100);
  netArtBlob.color = "#f9eeed";
  netArtBlob.textColor = "black";
  // netArtBlob.text = "net art";
  netArtBlob.amplitude = random(0.033);
  // netArtBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  netArtBlob.initialRadius = netArtBlob.radius;
  netArtBlob.scaledRadius =  netArtBlob.radius;

  

  installationsBlob = new Blobbo();
  installationsBlob.radius = windowWidth / 20;
  installationsBlob.positionX = (3 * windowWidth) / 20 + random(100);
  installationsBlob.positionY = (20 / 100) * windowHeight+ random(100);
  installationsBlob.color = "#f9eeed";
  installationsBlob.textColor = "black";
  // installationsBlob.text = "installations";
  installationsBlob.amplitude = random(0.033);
  // installationsBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  installationsBlob.initialRadius = installationsBlob.radius;
  installationsBlob.scaledRadius =  installationsBlob.radius;

  movingImageBlob = new Blobbo();
  movingImageBlob.radius = windowWidth / 20;
  movingImageBlob.positionX = windowWidth / 10+ random(100);
  movingImageBlob.positionY = (4 * windowHeight) / 10+ random(100);
  movingImageBlob.color = "#f9eeed";
  movingImageBlob.textColor = "black";
  // movingImageBlob.text = "movingImage";
  movingImageBlob.amplitude = random(0.033);
  // movingImageBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  movingImageBlob.initialRadius = movingImageBlob.radius;
  movingImageBlob.scaledRadius =  movingImageBlob.radius;

  

  threeDGraphicsBlob = new Blobbo();
  threeDGraphicsBlob.radius = windowWidth / 20;
  threeDGraphicsBlob.positionX = (15 / 100) * windowWidth;
  threeDGraphicsBlob.positionY = (68 / 100) * windowHeight;
  threeDGraphicsBlob.color =  "#f9eeed";
  threeDGraphicsBlob.textColor = "black";
  // threeDGraphicsBlob.text = "3D graphics";
  threeDGraphicsBlob.amplitude = random(0.033);
  // threeDGraphicsBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  threeDGraphicsBlob.initialRadius = threeDGraphicsBlob.radius;
  threeDGraphicsBlob.scaledRadius =  threeDGraphicsBlob.radius;
}

function draw() {
  background("#fff");
  // background("#000");

  artBlob.draw();
 
  gameBlob.draw();
  illustrationBlob.draw();
  netArtBlob.draw();
 
  installationsBlob.draw();
  movingImageBlob.draw();
  threeDGraphicsBlob.draw();

  artBlob.mouseOver();
 
  gameBlob.mouseOver();
  illustrationBlob.mouseOver();
  netArtBlob.mouseOver();
  installationsBlob.mouseOver();
  movingImageBlob.mouseOver();
  threeDGraphicsBlob.mouseOver();
}

// function mousePressed() {
//   artBlob.clicked();
//   techBlob.clicked();
//   designBlob.clicked();
//   gameBlob.clicked();
//   illustrationBlob.clicked();
//   netArtBlob.clicked();
//   webDesignBlob.clicked();
//   developmentBlob.clicked();
//   installationsBlob.clicked();
//   movingImageBlob.clicked();
//   creativeCodingBlob.clicked();
//   threeDGraphicsBlob.clicked();
// }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //art
  artBlob.radius = windowWidth / 3;
  artBlob.positionX = windowWidth / 4;
  artBlob.positionY = windowHeight / 4;

 

  //games
  gameBlob.radius = windowWidth / 20;
  gameBlob.positionX = windowWidth / 2;
  gameBlob.positionY = windowHeight / 5;

  //netArt
  netArtBlob.radius = windowWidth / 20;
  netArtBlob.positionX = windowWidth / 4;
  netArtBlob.positionY = (3 * windowHeight) / 5;

 


  //installations
  installationsBlob.radius = windowWidth / 20;
  installationsBlob.positionX = (3 * windowWidth) / 20;
  installationsBlob.positionY = windowHeight / 6;

  //movingImage
  movingImageBlob.radius = windowWidth / 20;
  movingImageBlob.positionX = windowWidth / 10;
  movingImageBlob.positionY = (4 * windowHeight) / 10;


  //threeDGraphics
  threeDGraphicsBlob.radius = windowWidth / 20;
  threeDGraphicsBlob.positionX = (6 * windowWidth) / 10;
  threeDGraphicsBlob.positionY = (9 * windowHeight) / 10;
}
