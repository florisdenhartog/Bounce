var x = [50,75,100,125,150];
var y = [50,75,100,125,150];
var speedY = [3,8,10,16,18];
var speedX = [4,6,12,17,23];
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  background('blue');

  // teken een cirkel en kleur ze in
  fill(100, 100, 255);
  ellipse(x[0],y[0],80,80);
  fill(100, 100, 255);
  ellipse(x[1],y[1],80,80);
  fill(0, 255, 255);
  ellipse(x[2],y[2],80,80);
  fill(100, 0, 255);
  ellipse(x[3],y[3],80,80);
  fill(255, 100, 0);
  ellipse(x[4],y[4],80,80);

  // bal op snelheid laten bewegen
  X[0]= X[0] + speedX[0] 
  X[1]= X[1] + speedX[1] 
  X[2]= X[2] + speedX[2] 
  X[3]= X[3] + speedX[3] 
  X[4]= X[4] + speedX[4] 

  Y[0]= Y[0] + speedY[0] 
  Y[1]= Y[1] + speedY[1] 
  Y[2]= Y[2] + speedY[2] 
  Y[3]= Y[3] + speedY[3] 
  Y[4]= Y[4] + speedY[4] 
  // bal 1

  if (y[0] > 680) {
    speedY[0] = speedY[0] * -1;
  }
  
  if (y[0] < 40) {
    speedY[0] = speedY[0] * -1;
  }

  if (x[0] > 40) {
    speedY[0] = speedY[0] * -1;
  }
  
  if (x[0] < 1240 {
    speedY[0] = speedY[0] * -1;
}

// bal 2

  if (y[1] > 680) {
  speedY[1] = speedY[1] * -1;
}

if (y[1] < 0) {
  speedY[1] = speedY[1] * -1;
}

if (x[1] > 730) {
  speedY[1] = speedY[1] * -1;
}

if (x[1] < 0) {
  speedY[1] = speedY[1] * -1;
}

// bal 3

if (y[2] > 730) {
  speedY[2] = speedY[2] * -1;
}

if (y[2] < 0) {
  speedY[2] = speedY[2] * -1;
}

if (x[2] > 730) {
  speedY[2] = speedY[2] * -1;
}

if (x[2] < 0) {
  speedY[2] = speedY[2] * -1;
}

// bal 4

if (y[3] > 730) {
  speedY[3] = speedY[3] * -1;
}

if (y[3] < 0) {
  speedY[3] = speedY[3] * -1;
}

if (x[3] > 730) {
  speedY[3] = speedY[3] * -1;
}

if (x[3] < 0) {
  speedY[3] = speedY[3] * -1;
}

// bal 5

if (y[4] > 730) {
  speedY[4] = speedY[4] * -1;
}

if (y[4] < 0) {
  speedY[4] = speedY[4] * -1;
}

if (x[4] > 730) {
  speedY[4] = speedY[4] * -1;
}

if (x[4] < 0) {
  speedY[4] = speedY[4] * -1;
}