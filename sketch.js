let artBlob;
let techBlob;
let designBlob;

function setup(){
  createCanvas(windowWidth, windowHeight);
  artBlob = new Blobbo();
  artBlob.radius=windowWidth/3
  artBlob.positionX=windowWidth/4;
  artBlob.positionY=windowHeight/4;
  artBlob.color=color(255, 153, 153,100);
  artBlob.textColor='black';
  artBlob.text='art';
  artBlob.amplitude=0.05;

  techBlob = new Blobbo();
  techBlob.radius=windowWidth/3
  techBlob.positionX=windowWidth/2;
  techBlob.positionY=3*windowHeight/4;
  techBlob.color=color(153, 153, 255,100);
  techBlob.textColor='black';
  techBlob.text='tech';
  techBlob.amplitude=0.02;

  designBlob = new Blobbo();
  designBlob.radius=windowWidth/4
  designBlob.positionX=3*windowWidth/4;
  designBlob.positionY=windowHeight/3;
  designBlob.color=color(153, 255, 204,100);
  designBlob.textColor='black';
  designBlob.text='design';
  designBlob.amplitude=0.02;

}

function draw(){
  background('#fff');
  artBlob.draw();
  techBlob.draw();
  designBlob.draw();

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  //art
    artBlob.radius=windowWidth/6;
    artBlob.positionX=windowWidth/4;
    artBlob.positionY=windowHeight/4;

  //tech
    techBlob.radius=windowWidth/5
    techBlob.positionX=windowWidth/2;
    techBlob.positionY=3*windowHeight/4;

    //design
    designBlob.radius=windowWidth/4
    designBlob.positionX=windowWidth/2;
    designBlob.positionY=3*windowHeight/4;
  

}
