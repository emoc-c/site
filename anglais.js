let _test;
function setup() {
  cnv= createCanvas(windowWidth,100,WEBGL);
  cnv.parent('head');
  _text = createGraphics(width,height);
  //_text.textFont('Source Code Pro');
  _text.background(0);
  _text.textAlign(CENTER,CENTER);
  _text.textSize(50);
  _text.fill(255);
  _text.noStroke();
  _text.text('our', width/4, height * 0.5);
  _text.text('name', (3*width)/4, height * 0.5);
}


function draw() {
  background(0);
  push();
  rotateX(frameCount/100);
  rotateY(frameCount/100);
  let n=noise(frameCount/100);
  fill(200+n*55,n*255,100+n*155);
  box(30);
  pop();
  push();
  noStroke();
  texture(_text);
  translate(0,0,-40);
  plane(width,height);
  pop();
  
}
