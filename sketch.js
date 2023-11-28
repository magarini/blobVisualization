let artBlob;
let techBlob;
let designBlob;

let gameBlob;
let illustrationBlob;

let netArtBlob;
let webDesignBlob;
let developmentBlob;
let installationsBlob;
let movingImageBlob;
let creativeCodingBlob;
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
  artBlob.color = "#EFC7C2";
  artBlob.textColor = "black";
  artBlob.text = "art";
  artBlob.amplitude = 0.015;
  artBlob.url = "art.html";
  artBlob.initialRadius = artBlob.radius;
  artBlob.scaledRadius = 1.2 * artBlob.radius;
  artBlob.fontSize=40;

  techBlob = new Blobbo();
  techBlob.radius = windowWidth / 8;
  techBlob.positionX = windowWidth / 3+ random(100);
  techBlob.positionY = (68 / 100) * windowHeight+ random(100);
  techBlob.color = "#9DBBAE";
  techBlob.textColor = "black";
  techBlob.text = "technology";
  techBlob.amplitude = 0.03;
  techBlob.url = "technology.html";
  techBlob.initialRadius = techBlob.radius;
  techBlob.scaledRadius = 1.2 * techBlob.radius;
  techBlob.fontSize=40;


  designBlob = new Blobbo();
  designBlob.radius = windowWidth / 8;
  designBlob.positionX = (4 * windowWidth) / 7+ random(100);
  designBlob.positionY = (3 * windowHeight) / 6+ random(100);
  designBlob.color = "#FFE5D4";
  designBlob.textColor = "black";
  designBlob.text = "design";
  designBlob.amplitude = 0.06;
  designBlob.url = "design.html";
  designBlob.initialRadius = designBlob.radius;
  designBlob.scaledRadius = 1.2 * designBlob.radius;
  designBlob.fontSize=40;

  gameBlob = new Blobbo();
  gameBlob.radius = windowWidth / 20;
  gameBlob.positionX = windowWidth / 2 + random(100);
  gameBlob.positionY = (28 / 100) * windowHeight + random(100);
  gameBlob.color = color(191,211,193,220);
  gameBlob.textColor = "black";
  gameBlob.text = "games";
  gameBlob.amplitude = random(0.033);
  gameBlob.url = "games.html";
  gameBlob.initialRadius = gameBlob.radius;
  gameBlob.scaledRadius = 1.2 * gameBlob.radius;

  illustrationBlob = new Blobbo();
  illustrationBlob.radius = windowWidth / 20;
  illustrationBlob.positionX = (55 / 100) * windowWidth + random(100);
  illustrationBlob.positionY = (40 / 100) * windowHeight + random(100);
  illustrationBlob.color = color(191,211,193,220);
  illustrationBlob.textColor = "black";
  illustrationBlob.text = "illustrations";
  illustrationBlob.amplitude = random(0.033);
  illustrationBlob.url = "illustrations.html";
  illustrationBlob.initialRadius = illustrationBlob.radius;
  illustrationBlob.scaledRadius = 1.2 * illustrationBlob.radius;

  netArtBlob = new Blobbo();
  netArtBlob.radius = windowWidth / 20;
  netArtBlob.positionX = windowWidth / 6+ random(100);
  netArtBlob.positionY = (3 * windowHeight) / 6+ random(100);
  netArtBlob.color = color(191,211,193,220);
  netArtBlob.textColor = "black";
  netArtBlob.text = "net art";
  netArtBlob.amplitude = random(0.033);
  netArtBlob.url = "netArt.html";
  netArtBlob.initialRadius = netArtBlob.radius;
  netArtBlob.scaledRadius = 1.2 * netArtBlob.radius;

  webDesignBlob = new Blobbo();
  webDesignBlob.radius = windowWidth / 20;
  webDesignBlob.positionX = (60 / 100) * windowWidth+ random(100);
  webDesignBlob.positionY = (65 / 100) * windowHeight+ random(100);
  webDesignBlob.color = color(191,211,193,220);
  webDesignBlob.textColor = "black";
  webDesignBlob.text = "web design";
  webDesignBlob.amplitude = random(0.033);
  webDesignBlob.url = "webdesign.html";
  webDesignBlob.initialRadius = webDesignBlob.radius;
  webDesignBlob.scaledRadius = 1.2 * webDesignBlob.radius;

  developmentBlob = new Blobbo();
  developmentBlob.radius = windowWidth / 20;
  developmentBlob.positionX = (50 / 100) * windowWidth+ random(100);
  developmentBlob.positionY = (75 / 100) * windowHeight+ random(100);
  developmentBlob.color = color(191,211,193,220);
  developmentBlob.textColor = "black";
  developmentBlob.text = "development";
  developmentBlob.amplitude = random(0.033);
  developmentBlob.url = "technology.html";
  developmentBlob.initialRadius = developmentBlob.radius;
  developmentBlob.scaledRadius = 1.2 * developmentBlob.radius;

  installationsBlob = new Blobbo();
  installationsBlob.radius = windowWidth / 20;
  installationsBlob.positionX = (3 * windowWidth) / 20 + random(100);
  installationsBlob.positionY = (20 / 100) * windowHeight+ random(100);
  installationsBlob.color = color(191,211,193,220);
  installationsBlob.textColor = "black";
  installationsBlob.text = "installations";
  installationsBlob.amplitude = random(0.033);
  installationsBlob.url = "installations.html";
  installationsBlob.initialRadius = installationsBlob.radius;
  installationsBlob.scaledRadius = 1.2 * installationsBlob.radius;

  movingImageBlob = new Blobbo();
  movingImageBlob.radius = windowWidth / 20;
  movingImageBlob.positionX = windowWidth / 10+ random(100);
  movingImageBlob.positionY = (4 * windowHeight) / 10+ random(100);
  movingImageBlob.color = color(191,211,193,220);
  movingImageBlob.textColor = "black";
  movingImageBlob.text = "movingImage";
  movingImageBlob.amplitude = random(0.033);
  movingImageBlob.url = "movingImage.html";
  movingImageBlob.initialRadius = movingImageBlob.radius;
  movingImageBlob.scaledRadius = 1.2 * movingImageBlob.radius;

  creativeCodingBlob = new Blobbo();
  creativeCodingBlob.radius = windowWidth / 20;
  creativeCodingBlob.positionX = windowWidth / 10;
  creativeCodingBlob.positionY = (55 / 100) * windowHeight;
  creativeCodingBlob.color = color(191,211,193,220);
  creativeCodingBlob.textColor = "black";
  creativeCodingBlob.text = "creativeCoding";
  creativeCodingBlob.amplitude = random(0.033);
  creativeCodingBlob.url = "creativecoding.html";
  creativeCodingBlob.initialRadius = creativeCodingBlob.radius;
  creativeCodingBlob.scaledRadius = 1.2 * creativeCodingBlob.radius;

  threeDGraphicsBlob = new Blobbo();
  threeDGraphicsBlob.radius = windowWidth / 20;
  threeDGraphicsBlob.positionX = (15 / 100) * windowWidth;
  threeDGraphicsBlob.positionY = (68 / 100) * windowHeight;
  threeDGraphicsBlob.color = color(191,211,193,220);
  threeDGraphicsBlob.textColor = "black";
  threeDGraphicsBlob.text = "3D graphics";
  threeDGraphicsBlob.amplitude = random(0.033);
  threeDGraphicsBlob.url = "threeD.html";
  threeDGraphicsBlob.initialRadius = threeDGraphicsBlob.radius;
  threeDGraphicsBlob.scaledRadius = 1.2 * threeDGraphicsBlob.radius;
}

function draw() {
  background("#fff");
  // background("#000");

  artBlob.draw();
  techBlob.draw();
  designBlob.draw();
  gameBlob.draw();
  illustrationBlob.draw();
  netArtBlob.draw();
  webDesignBlob.draw();
  developmentBlob.draw();
  installationsBlob.draw();
  movingImageBlob.draw();
  creativeCodingBlob.draw();
  threeDGraphicsBlob.draw();

  artBlob.mouseOver();
  techBlob.mouseOver();
  designBlob.mouseOver();
  gameBlob.mouseOver();
  illustrationBlob.mouseOver();
  netArtBlob.mouseOver();
  webDesignBlob.mouseOver();
  developmentBlob.mouseOver();
  installationsBlob.mouseOver();
  movingImageBlob.mouseOver();
  creativeCodingBlob.mouseOver();
  threeDGraphicsBlob.mouseOver();

  // if(mouseIsPressed===true){
  //   artBlob.scaleRadius();
  // }
}

function mousePressed() {
  artBlob.clicked();
  techBlob.clicked();
  designBlob.clicked();
  gameBlob.clicked();
  illustrationBlob.clicked();
  netArtBlob.clicked();
  webDesignBlob.clicked();
  developmentBlob.clicked();
  installationsBlob.clicked();
  movingImageBlob.clicked();
  creativeCodingBlob.clicked();
  threeDGraphicsBlob.clicked();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //art
  artBlob.radius = windowWidth / 3;
  artBlob.positionX = windowWidth / 4;
  artBlob.positionY = windowHeight / 4;

  //tech
  techBlob.radius = windowWidth / 5;
  techBlob.positionX = windowWidth / 2;
  techBlob.positionY = (3 * windowHeight) / 4;

  //design
  designBlob.radius = windowWidth / 4;
  designBlob.positionX = (3 * windowWidth) / 4;
  designBlob.positionY = windowHeight / 3;

  //games
  gameBlob.radius = windowWidth / 20;
  gameBlob.positionX = windowWidth / 2;
  gameBlob.positionY = windowHeight / 5;

  //netArt
  netArtBlob.radius = windowWidth / 20;
  netArtBlob.positionX = windowWidth / 4;
  netArtBlob.positionY = (3 * windowHeight) / 5;

  //webDesign
  webDesignBlob.radius = windowWidth / 20;
  webDesignBlob.positionX = (3 * windowWidth) / 4;
  webDesignBlob.positionY = (3 * windowHeight) / 5;

  //development
  developmentBlob.radius = windowWidth / 20;
  developmentBlob.positionX = (4 * windowWidth) / 5;
  developmentBlob.positionY = (4 * windowHeight) / 5;

  //installations
  installationsBlob.radius = windowWidth / 20;
  installationsBlob.positionX = (3 * windowWidth) / 20;
  installationsBlob.positionY = windowHeight / 6;

  //movingImage
  movingImageBlob.radius = windowWidth / 20;
  movingImageBlob.positionX = windowWidth / 10;
  movingImageBlob.positionY = (4 * windowHeight) / 10;

  //creativeCoding
  creativeCodingBlob.radius = windowWidth / 20;
  creativeCodingBlob.positionX = windowWidth / 10;
  creativeCodingBlob.positionY = (9 * windowHeight) / 10;

  //threeDGraphics
  threeDGraphicsBlob.radius = windowWidth / 20;
  threeDGraphicsBlob.positionX = (6 * windowWidth) / 10;
  threeDGraphicsBlob.positionY = (9 * windowHeight) / 10;
}
