function setup() {
  createCanvas(400, 400);
  Saturation = 30;
  Color = 0;
}

function draw() {
  background(220, 160, 150);
  fill("lime")
  //Move over 40x40
  translate(40, 40)
  //Loop
  for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
      
      //Increase saturation 10 each time
      Saturation = 20 + 10*j
      //Fill ellipse with new color
      fill("hsl(" + Color + ", 50%, " + Saturation + "%)")
      ellipse(i*80, j*80, 80);
      
    }
    Color = 60*i  //Increase color by 60 per run, kinda a weird gradient but its fine
  }
}
