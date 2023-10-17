class Blobbo{
  constructor(){
    this.nbPoints = 500;
    this.time = 0;
    this.radius;
    this.positionX;
    this.positionY;
    this.color;
    this.textColor;
    this.text;
    this.amplitude;

  }
  
  wave(num, amp, freq, speed){
    return amp * sin(freq * TWO_PI * num/this.nbPoints + this.time * speed);
  }
  
  draw(){
    noStroke();
    fill(this.color);

    beginShape();

    for(let i = 0; i < this.nbPoints; i++){
      let angle = TWO_PI * i / this.nbPoints;
      let r = this.radius + this.wave(i, mouseX* this.amplitude, 3, 1) + this.wave(i, mouseY* this.amplitude, 7, 3) + this.wave(i, 5, 9, 0) + this.wave(i, 2, 13, -5);
      
      let x = this.positionX + r * cos(angle);
      let y = this.positionY + r * sin(angle);

      vertex(x, y);
    }

    endShape();
    
    this.time += 0.01;
    fill(this.textColor);
    textAlign(CENTER);
    text(this.text,this.positionX,this.positionY);
  }
}