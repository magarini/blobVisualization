

let artBlob;



function preload() {
  myFont = loadFont('/fonts/Poppins-Regular.ttf');
}

function setup() {
  let button = select('.sticker');

  var cnv = createCanvas(200, 200);

  button.child(cnv);


  textFont(myFont);

  artBlob = new Blobbo();
  artBlob.radius = 90;
  artBlob.positionX = 100;
  artBlob.positionY =  100;
  artBlob.color = "#EFC7C2";
  artBlob.textColor = "black";
  artBlob.amplitude = 0.015;
  artBlob.fontSize=24;


}

function draw() {
  clear();
  artBlob.draw();

}

