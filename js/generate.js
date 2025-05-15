let Radius = 100;
let border = 10;
let smallCircle = 40;
let strokewidth = 1;
let buttonChangeColor, buttonChangeStrokeColor, buttonChangeSize, buttonChangeRadius, buttonChangeStrokeWidth, buttonRandomizeAll, buttonSmallCircleSize, buttonChangeSmallCircleColor, buttonSave;

function setup() {

    let canvas = createCanvas(400, 400);
    canvas.parent('generativeBatik');

    setupButtons();
    windowResized();
  
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  
  stroker = random(0, 255);
  strokeg = random(255);
  strokeb = random(255);
  
  rs = random(255);
  gs = random(255);
  bs = random(255);

}

function draw() {
  background("#000000");
  rectMode(CENTER);
  
  
  for (matY = 0; matY <= height+Radius/2; matY += Radius) {
    for (matX = 0; matX <= width + Radius/2; matX += Radius) {
      noStroke();
      fill(r, g, b);
      square(matX, matY, Radius, border);
      square(matX+Radius/2, matY+Radius/2, Radius, border)
    }
  }
  for (matY = 0; matY <= height + Radius; matY += Radius) {
    for (matX = 0; matX <= width + Radius; matX += Radius) {
      stroke(stroker, strokeg, strokeb);
      strokeWeight(strokewidth);
      noFill();
      square(matX, matY, Radius, border);
      square(matX+Radius/2, matY+Radius/2, Radius, border)
    }
  }
  for (matY = 0 - Radius; matY <= height + 2*Radius; matY += Radius) {
    for (matX = 0 - Radius; matX <= width + 2*Radius; matX += Radius) {
      fill(rs, gs, bs);
      noStroke()
      square(matX-Radius/2, matY-Radius, smallCircle/5, border);
      square(matX+Radius, matY-Radius/2, smallCircle/3, border);
    }
  }

}

function windowResized() {
  if (windowWidth < 600) {
      resizeCanvas(300, 300);
      pixelDensity(8);
  } else if (windowWidth < 1400) {
      resizeCanvas(400, 400);
      pixelDensity(6);
  } else if (windowWidth < 1600) {
      resizeCanvas(500, 500);
      pixelDensity(5);
  } else if (windowWidth < 2000) {
      resizeCanvas(600, 600);
      pixelDensity(4);
  } else {
      resizeCanvas(1000, 1000);
      pixelDensity(2.5);
  }
  setupButtons();
}

function setupButtons() {
    const buttonContainer = select('.button-container');

    buttonContainer.html('');

    buttonChangeSize = createButton("Ukuran Kawung");
    buttonChangeSize.mousePressed(changeSize);
    buttonContainer.child(buttonChangeSize);
    
    buttonChangeRadius = createButton("Radius Kawung");
    buttonChangeRadius.mousePressed(changeRadius);
    buttonContainer.child(buttonChangeRadius);

    buttonChangeColor = createButton("Warna Kawung");
    buttonChangeColor.mousePressed(changeColor);
    buttonContainer.child(buttonChangeColor);

    buttonSmallCircleSize = createButton("Ukuran Bulat");
    buttonSmallCircleSize.mousePressed(middleCircle);
    buttonContainer.child(buttonSmallCircleSize);

    buttonChangeStrokeWidth = createButton("Ketebalan Garis");
    buttonChangeStrokeWidth.mousePressed(changeLine);
    buttonContainer.child(buttonChangeStrokeWidth);

    buttonChangeSmallCircleColor = createButton("Warna Bulat");
    buttonChangeSmallCircleColor.mousePressed(changeColorSmall);
    buttonContainer.child(buttonChangeSmallCircleColor);

    buttonChangeStrokeColor = createButton("Warna Garis");
    buttonChangeStrokeColor.mousePressed(changestrokeColor);
    buttonContainer.child(buttonChangeStrokeColor);

    buttonRandomizeAll = createButton("Acak semua");
    buttonRandomizeAll.mousePressed(randomizeAll);
    buttonContainer.child(buttonRandomizeAll);

    buttonSave = createButton("SIMPAN");
    buttonSave.mousePressed(saveBatik);
    buttonContainer.child(buttonSave);
}

function saveBatik() {
  // saveFrames('Batik Kawung', 'png', 1, 1)
  saveCanvas('Batik Kawung.png');
}

function changeColor(){
	r = random(255);
	g = random(255);
	b = random(255);
}

function changeColorSmall(){
	rs = random(255);
	gs = random(255);
	bs = random(255);
}

function changestrokeColor(){
	stroker = random(255);
	strokeg = random(255);
	strokeb = random(255);
}

function changeSize() {
  let sizes = [width/3, width/4, width/5, width/6, width/7, width/8, width/9, width/10];
  Radius = random(sizes);
}

function changeRadius() {
  let borderRandom = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  border = random(borderRandom);
}

function changeLine() {
  strokewidth = random(1, 10);
}

function middleCircle() {
  let middle = [40, 50, 60, 70, 80];
  smallCircle = random(middle);
}

function randomizeAll() {
  changeColor();
  changestrokeColor();
  strokeWeightValue = random(1, 10);
  changeSize();
  changeRadius();
  changeLine();
  middleCircle();
  changeColorSmall();
}