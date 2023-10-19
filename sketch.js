let artBlob;
let techBlob;
let designBlob;

let gameBlob;
let illustrationBlob;

let netArtBlob;
let webDesignBlob;
let developmentBlob;
let installationsBlob;
let videoBlob;
let creativeCodingBlob;

function setup() {
  createCanvas(windowWidth, windowHeight);
  artBlob = new Blobbo();
  artBlob.radius = windowWidth / 4;
  artBlob.positionX = windowWidth / 3;
  artBlob.positionY = 2*windowHeight / 7;
  artBlob.color = color(255, 153, 153, 50);
  artBlob.textColor = "black";
  artBlob.text = "art";
  artBlob.amplitude = 0.05;
  artBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  artBlob.initialRadius = artBlob.radius;
  artBlob.scaledRadius = 1.5 * artBlob.radius;

  techBlob = new Blobbo();
  techBlob.radius = windowWidth / 4;
  techBlob.positionX = windowWidth / 2;
  techBlob.positionY = (3 * windowHeight) / 4;
  techBlob.color = color(153, 153, 255, 50);
  techBlob.textColor = "black";
  techBlob.text = "tech";
  techBlob.amplitude = 0.02;
  techBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  techBlob.initialRadius = techBlob.radius;
  techBlob.scaledRadius = 1.5 * techBlob.radius;

  designBlob = new Blobbo();
  designBlob.radius = windowWidth / 4;
  designBlob.positionX = (3 * windowWidth) / 4;
  designBlob.positionY = windowHeight / 3;
  designBlob.color = color(153, 255, 204, 50);
  designBlob.textColor = "black";
  designBlob.text = "design";
  designBlob.amplitude = 0.02;
  designBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  designBlob.initialRadius = designBlob.radius;
  designBlob.scaledRadius = 1.5 * designBlob.radius;

  gameBlob = new Blobbo();
  gameBlob.radius = windowWidth / 12;
  gameBlob.positionX = windowWidth / 2;
  gameBlob.positionY = windowHeight / 5;
  gameBlob.color = color(102, 204, 255, 50);
  gameBlob.textColor = "black";
  gameBlob.text = "games";
  gameBlob.amplitude = 0.01;
  gameBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  gameBlob.initialRadius = gameBlob.radius;
  gameBlob.scaledRadius = 1.5 * gameBlob.radius;

  illustrationBlob = new Blobbo();
  illustrationBlob.radius = windowWidth / 12;
  illustrationBlob.positionX = windowWidth / 5;
  illustrationBlob.positionY = (4 * windowHeight) / 5;
  illustrationBlob.color = color(102, 204, 255, 50);
  illustrationBlob.textColor = "black";
  illustrationBlob.text = "illustrations";
  illustrationBlob.amplitude = 0.015;
  illustrationBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  illustrationBlob.initialRadius = illustrationBlob.radius;
  illustrationBlob.scaledRadius = 1.5 * illustrationBlob.radius;

  netArtBlob = new Blobbo();
  netArtBlob.radius = windowWidth / 12;
  netArtBlob.positionX = windowWidth / 4;
  netArtBlob.positionY = (3 * windowHeight) / 5;
  netArtBlob.color = color(102, 204, 255, 50);
  netArtBlob.textColor = "black";
  netArtBlob.text = "net art";
  netArtBlob.amplitude = 0.015;
  netArtBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  netArtBlob.initialRadius = netArtBlob.radius;
  netArtBlob.scaledRadius = 1.5 * netArtBlob.radius;

  webDesignBlob = new Blobbo();
  webDesignBlob.radius = windowWidth / 12;
  webDesignBlob.positionX = (3 * windowWidth) / 4;
  webDesignBlob.positionY = (3 * windowHeight) / 5;
  webDesignBlob.color = color(102, 204, 255, 50);
  webDesignBlob.textColor = "black";
  webDesignBlob.text = "web design";
  webDesignBlob.amplitude = 0.015;
  webDesignBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  webDesignBlob.initialRadius = webDesignBlob.radius;
  webDesignBlob.scaledRadius = 1.5 * webDesignBlob.radius;

  developmentBlob = new Blobbo();
  developmentBlob.radius = windowWidth / 12;
  developmentBlob.positionX = (4 * windowWidth) / 5;
  developmentBlob.positionY = (4 * windowHeight) / 5;
  developmentBlob.color = color(102, 204, 255, 50);
  developmentBlob.textColor = "black";
  developmentBlob.text = "development";
  developmentBlob.amplitude = 0.015;
  developmentBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  developmentBlob.initialRadius = developmentBlob.radius;
  developmentBlob.scaledRadius = 1.5 * developmentBlob.radius;

  installationsBlob = new Blobbo();
  installationsBlob.radius = windowWidth / 12;
  installationsBlob.positionX = ( windowWidth) / 10;
  installationsBlob.positionY = ( windowHeight) / 6;
  installationsBlob.color = color(102, 204, 255, 50);
  installationsBlob.textColor = "black";
  installationsBlob.text = "installations";
  installationsBlob.amplitude = 0.015;
  installationsBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  installationsBlob.initialRadius = installationsBlob.radius;
  installationsBlob.scaledRadius = 1.5 * installationsBlob.radius;
}

function draw() {
  background("#fff");
  artBlob.draw();
  techBlob.draw();
  designBlob.draw();
  gameBlob.draw();
  illustrationBlob.draw();
  netArtBlob.draw();
  webDesignBlob.draw();
  developmentBlob.draw();
  installationsBlob.draw();

  artBlob.mouseOver();
  techBlob.mouseOver();
  designBlob.mouseOver();
  gameBlob.mouseOver();
  illustrationBlob.mouseOver();
  netArtBlob.mouseOver();
  webDesignBlob.mouseOver();
  developmentBlob.mouseOver();
  installationsBlob.mouseOver();
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
  gameBlob.radius = windowWidth / 12;
  gameBlob.positionX = windowWidth / 2;
  gameBlob.positionY = windowHeight / 5;

  //netArt
  netArtBlob.radius = windowWidth / 12;
  netArtBlob.positionX = windowWidth / 4;
  netArtBlob.positionY = (3 * windowHeight) / 5;

  //webDesign
  webDesignBlob.radius = windowWidth / 12;
  webDesignBlob.positionX = (3 * windowWidth) / 4;
  webDesignBlob.positionY = (3 * windowHeight) / 5;

  //development
  developmentBlob.radius = windowWidth / 12;
  developmentBlob.positionX = (3 * windowWidth) / 4;
  developmentBlob.positionY = (3 * windowHeight) / 5;

  //installations
  installationsBlob.radius = windowWidth / 12;
  installationsBlob.positionX = (3 * windowWidth) / 4;
  installationsBlob.positionY = (3 * windowHeight) / 5;
}
