function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill (255,0,0);
  ellipse (random(0,100),50,50,50);

  fill (255,255,0);
  ellipse (random(0,100),150,50,50);

  fill (0);
  textAllign(CENTER);
  text("Nicolas Orozco,Sebastian Mosquera,Natalia Martinez",70,50);
 
  fill (0,255,0);
  ellipse (random(0,100),150,50,50);
  
  text("b",80,150);


  fill (255,0,0);
  text("c",150,150);
}
