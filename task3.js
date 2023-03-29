function setup() {
  createCanvas(400, 400);
  myColors = ["blue", "red", "lime", "yellow", "orange"]
  
  squareColors= []
//no loop messes up mouse input, so I have to do janky stuff
//with this squarecolors array, dont write code like this
  
  Color = 0;
  Saturation = 40;
  //Hold down mouse to change to task 2
  
  for(let i = 1; i < 10; i++){
    
    //Grab rand. color. do top left ellipse
    squareColors[2*i-2] = (random(myColors))
    ellipse(i*40, i*40, 40);
    //Grab rand. color. do bot left ellipse
    squareColors[(2*i)-1] = (random(myColors))
    ellipse(i*40, 400-i*40, 40);
  }
  
  
}

function draw() {
  background(220, 160, 150);
  
  
  
  for(let i = 1; i < 10; i++){
    
    //Grab rand. color. do top left ellipse
    fill(squareColors[(i*2)-2])
    
    ellipse(i*40, i*40, 40+(mouseY/20));
    //Grab rand. color. do bot left ellipse
    fill(squareColors[(i*2)-1])
    
    ellipse(i*40, 400-i*40, 40+(mouseY/20));
  }
  
  
  
  if(mouseIsPressed){
    background(220, 160, 150);
    fill("lime")
    //Move over 40x40
    translate(40, 40)
    //Loop
    for(let i = 0; i < 5; i++){
      for(let j = 0; j < 5; j++){

        Saturation = 40 + mouseY/20
        //Fill ellipse with new color
        fill("hsl(" + Color + ", 50%, " + Saturation + "%)")
        ellipse(i*80, j*80, 80);

      }
      Color = 60*i  //Increase color by 60 per run, kinda a weird gradient but its fine
      }  
    }
  
  
}
