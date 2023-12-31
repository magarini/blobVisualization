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
    this.fontSize=24;

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
        this.wave(i, (mouseX * this.amplitude) / 2, 3, 1) +
        this.wave(i, (mouseY * this.amplitude) / 2, 7, -1) +
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
    textSize(this.fontSize);
    text(this.text, this.positionX, this.positionY);
  }

  mouseOver() {
    if (dist(mouseX, mouseY, this.positionX, this.positionY) < this.radius) {
      this.radius = this.scaledRadius;
      this.positionX = this.positionX + random(-1, 1);
      this.positionY = this.positionY + random(-1, 1);

      cursor(HAND);
    } else {
      this.radius = this.initialRadius;
      // cursor(ARROW);
    }
  }

  scaleRadius(){
    frameRate(5)

    var startTime = Date.now();
      while (Date.now() - startTime < 200) {
       this.radius=this.radius+200;
       console.log(this.radius)
      }
  }

  clicked() {
    if (dist(mouseX, mouseY, this.positionX, this.positionY) < this.radius) {

      let link = this.url;
      setTimeout(function () {
        window.location.href = link;
      }, 200);

      this.scaleRadius();


      console.log("clickeddd");
    }
  }
}
