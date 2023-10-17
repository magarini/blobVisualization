
let sprite;

function setup() {
	new Canvas(238, 100);

	sprite = new Sprite();
	sprite.diameter = 50;
    sprite= new Blobbo();
    sprite.radius=windowWidth/4;
}

function draw() {
	clear();
}