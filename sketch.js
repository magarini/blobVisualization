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



function setup(){
  createCanvas(windowWidth, windowHeight);
  artBlob = new Blobbo();
  artBlob.radius=windowWidth/4
  artBlob.positionX=windowWidth/4;
  artBlob.positionY=windowHeight/4;
  artBlob.color=color(255, 153, 153,50);
  artBlob.textColor='black';
  artBlob.text='art';
  artBlob.amplitude=0.05;
  artBlob.url='https://p5js.org/reference/#/p5.Element/mouseOver'

  techBlob = new Blobbo();
  techBlob.radius=windowWidth/4
  techBlob.positionX=windowWidth/2;
  techBlob.positionY=3*windowHeight/4;
  techBlob.color=color(153, 153, 255,50);
  techBlob.textColor='black';
  techBlob.text='tech';
  techBlob.amplitude=0.02;

  designBlob = new Blobbo();
  designBlob.radius=windowWidth/4
  designBlob.positionX=3*windowWidth/4;
  designBlob.positionY=windowHeight/3;
  designBlob.color=color(153, 255, 204,50);
  designBlob.textColor='black';
  designBlob.text='design';
  designBlob.amplitude=0.02;

  gameBlob = new Blobbo();
  gameBlob.radius=windowWidth/12
  gameBlob.positionX=windowWidth/2;
  gameBlob.positionY=windowHeight/5;
  gameBlob.color=color(102, 204, 255,50);
  gameBlob.textColor='black';
  gameBlob.text='games';
  gameBlob.amplitude=0.01;

  illustrationBlob = new Blobbo();
  illustrationBlob.radius=windowWidth/12
  illustrationBlob.positionX=windowWidth/5;
  illustrationBlob.positionY=4*windowHeight/5;
  illustrationBlob.color=color(102, 204, 255,50);
  illustrationBlob.textColor='black';
  illustrationBlob.text='illustrations';
  illustrationBlob.amplitude=0.015;
  
  illustrationBlob.url='https://p5js.org/reference/#/p5.Element/mouseOver'
  
  illustrationBlob.initialRadius=illustrationBlob.radius;
  illustrationBlob.scaledRadius=1.5*illustrationBlob.radius;
}

function draw(){
  background('#fff');
  artBlob.draw();
  techBlob.draw();
  designBlob.draw();
  gameBlob.draw();
  illustrationBlob.draw();

  illustrationBlob.mouseOver();

}


function mousePressed(){
  illustrationBlob.clicked(); 
 }

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  //art
  artBlob.radius=windowWidth/3
  artBlob.positionX=windowWidth/4;
  artBlob.positionY=windowHeight/4;

  //tech
    techBlob.radius=windowWidth/5
    techBlob.positionX=windowWidth/2;
    techBlob.positionY=3*windowHeight/4;

    //design
    designBlob.radius=windowWidth/4
    designBlob.positionX=3*windowWidth/4;
    designBlob.positionY=windowHeight/3;


        //games
        gameBlob.radius=windowWidth/12
        gameBlob.positionX=windowWidth/2;
        gameBlob.positionY=windowHeight/5;

        //illustration
        illustrationBlob.radius=windowWidth/12
        illustrationBlob.positionX=windowWidth/5;
        illustrationBlob.positionY=4*windowHeight/5;

}
