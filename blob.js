class Blobbo {
  constructor() {
    this.nbPoints = 500;
    this.time = 0;
    this.radius;
    this.positionX;
    this.positionY;
    this.color;
    this.textColor;
    this.text;
    this.amplitude;
    this.url;

    this.scaledRadius;
    this.initialRadius;
  }

  wave(num, amp, freq, speed) {
    return amp * sin((freq * TWO_PI * num) / this.nbPoints + this.time * speed);
  }

  draw() {
    noStroke();
    fill(this.color);
    // filter(BLUR, 3);

    beginShape();

    for (let i = 0; i < this.nbPoints; i++) {
      let angle = (TWO_PI * i) / this.nbPoints;
      let r =
        this.radius +
        this.wave(i, (mouseX * this.amplitude)/2, 3, 1) +
        this.wave(i, (mouseY * this.amplitude)/2, 7, -1) +
        this.wave(i, 2, 5, 0) +
        this.wave(i, 2, 3, -4);

      let x = this.positionX + r * cos(angle);
      let y = this.positionY + r * sin(angle);

      vertex(x, y);
    }

    endShape();

    this.time += 0.01;
    fill(this.textColor);
    textAlign(CENTER);
    textSize(16);
    text(this.text, this.positionX, this.positionY);
  }

  mouseOver() {
    if (dist(mouseX, mouseY, this.positionX, this.positionY) < this.radius) {
      this.radius = this.scaledRadius;
      this.positionX=this.positionX+random(-1,1);
      this.positionY=this.positionY+random(-1,1);

      cursor(HAND);
    } else {
      this.radius = this.initialRadius;
      // cursor(ARROW);
    }
  }

  clicked() {
    if (dist(mouseX, mouseY, this.positionX, this.positionY) < this.radius) {

      // this.radius=this.radius+200;
        // function scaleBlob(radius){
        //   radius=radius+20;
        //   console.log(radius)
        //   return radius;
        // }
        // setInterval(
        //   scaleBlob,100,this.radius)
        //   this.radius=scaleBlob;


      function pageTransition(url){
        window.open(url, "_self");
        console.log(url);
      }

      setTimeout(
        pageTransition,0,this.url);
      console.log("clickedInside")
    }
  }
}
