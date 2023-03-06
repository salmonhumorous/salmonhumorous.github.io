let responsiveWidth;
let canvas;


function preload() {
  font = loadFont("/assets/Roboto-Black.ttf");
  fontb = loadFont("/assets/Roboto-Bold.ttf");
  fontc =loadFont("/assets/RobotoCondensed-Bold.ttf");
  fontm = loadFont("/assets/Roboto-Medium.ttf");
}


function setup(){
    responsiveWidth = constrain(window.innerWidth,100,800);
    if (responsiveWidth < 600){
      canvas = createCanvas(responsiveWidth-40,75);
    } else {
      canvas = createCanvas(responsiveWidth-60,100);
    }

    canvas.parent("canvas-container");
    noLoop();

}

function draw(){
    background("#E6E49F");
    for(i=15; i>1; i--){
      noStroke();
      fill(0,48,73,150/i);
      circle(width/2,height/2,i*60);
      }
      fill(20);
      textStyle(BOLD);
      textFont(fontm, 44);
      textAlign(CENTER,CENTER);
      //text("Blog",width/2,height/2)
    }


function windowResized() {
    responsiveWidth = constrain(window.innerWidth,100,800);
    if (responsiveWidth < 600){
      canvas = resizeCanvas(responsiveWidth-40,75);
    } else {
      canvas = resizeCanvas(responsiveWidth-60,100);
    }
}
