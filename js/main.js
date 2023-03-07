var drawing;
var con;
var bird;
CANV_HEIGHT = 200;
CANV_WIDTH = 200;
SPR_HEIGHT = 50;
SPR_WIDTH = 40;
var x = 0;
var y = 100;
var dx = 0;
dy = 0;
var currentKey;

function init() {
	drawing = document.getElementById('drawing');
	con = drawing.getContext('2d');
	bird = document.getElementById('bird');
	document.onkeydown = updateKeys;
	setInterval(draw, 100);
}

function updateKeys(e) {
	currentKey = e.keyCode;

	if (currentKey == K_LEFT) {
		dx = -5;
	}
	if (currentKey == K_RIGHT) {
		dx = 5;
	}
	if (currentKey == K_UP) {
		dy = -5;
	}
	if (currentKey == K_DOWN) {
		dy = 5;
	}
	if (currentKey == K_SPACE) {
		dx = 0;
		dy = 0;
	}
}

function draw() {
	con.clearRect(0, 0, 200, 200);
	currentKey = null;

	x += dx;
	y += dy;

	wrap();

	con.drawImage(bird, x, y, SPR_WIDTH, SPR_HEIGHT);
}

function wrap() {
	if (x > CANV_WIDTH) {
		x = 0;
	}
	if (x < 0) {
		x = CANV_WIDTH;
	}
	if (x > CANV_HEIGHT) {
		x = 0;
	}
	if (x < 0) {
		x = CANV_HEIGHT;
	}
}

K_LEFT = 37;
K_RIGHT = 39;
K_UP = 38;
K_DOWN = 40;
K_SPACE = 32;
