let artBlob;

function setup(){
  createCanvas(windowWidth, windowHeight);
  artBlob = new Blobbo();
  artBlob.radius=windowWidth/5
  artBlob.positionX=windowWidth/4;
  artBlob.positionY=windowWidth/4;

}

function draw(){
  background('#fff');
  artBlob.draw();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
    artBlob.radius=windowWidth/5;

}
