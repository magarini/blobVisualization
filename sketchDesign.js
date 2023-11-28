
let designBlob;

let illustrationBlob;

let webDesignBlob;


function preload() {
  myFont = loadFont('fonts/Poppins-Regular.ttf');
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('width', '90%');

  textFont(myFont);

  

  designBlob = new Blobbo();
  designBlob.radius = windowWidth / 8;
  designBlob.positionX = (4 * windowWidth) / 7+ random(100);
  designBlob.positionY = (3 * windowHeight) / 6+ random(100);
  designBlob.color = "#fff0e6";
  designBlob.textColor = "black";
  // designBlob.text = "design";
  designBlob.amplitude = 0.06;
  // designBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  designBlob.initialRadius = designBlob.radius;
  designBlob.scaledRadius = designBlob.radius;

  

  illustrationBlob = new Blobbo();
  illustrationBlob.radius = windowWidth / 20;
  illustrationBlob.positionX = (55 / 100) * windowWidth + random(100);
  illustrationBlob.positionY = (40 / 100) * windowHeight + random(100);
  illustrationBlob.color = "#fff0e6";
  illustrationBlob.textColor = "black";
  // illustrationBlob.text = "illustrations";
  illustrationBlob.amplitude = random(0.033);
  // illustrationBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  illustrationBlob.initialRadius = illustrationBlob.radius;
  illustrationBlob.scaledRadius = illustrationBlob.radius;

 

  webDesignBlob = new Blobbo();
  webDesignBlob.radius = windowWidth / 20;
  webDesignBlob.positionX = (60 / 100) * windowWidth+ random(100);
  webDesignBlob.positionY = (65 / 100) * windowHeight+ random(100);
  webDesignBlob.color = "#fff0e6";
  webDesignBlob.textColor = "black";
  // webDesignBlob.text = "web design";
  webDesignBlob.amplitude = random(0.033);
  // webDesignBlob.url = "https://p5js.org/reference/#/p5.Element/mouseOver";
  webDesignBlob.initialRadius = webDesignBlob.radius;
  webDesignBlob.scaledRadius = webDesignBlob.radius;

 
}

function draw() {
  background("#fff");
  // background("#000");

  designBlob.draw();
  illustrationBlob.draw();
  webDesignBlob.draw();


}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  

  //design
  designBlob.radius = windowWidth / 4;
  designBlob.positionX = (3 * windowWidth) / 4;
  designBlob.positionY = windowHeight / 3;

 

  

  //webDesign
  webDesignBlob.radius = windowWidth / 20;
  webDesignBlob.positionX = (3 * windowWidth) / 4;
  webDesignBlob.positionY = (3 * windowHeight) / 5;

  
}
