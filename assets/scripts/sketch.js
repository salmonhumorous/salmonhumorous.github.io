let margin = 60;
let homepage;
let button1;
let button2;
let button3;
let link1;
let link2;
let link3;
let link4;
let link5;

function preload() {
  font = loadFont("assets/Roboto-Black.ttf");
  fontb = loadFont("assets/Roboto-Bold.ttf");
  fontc =loadFont("assets/RobotoCondensed-Bold.ttf");
  fontm = loadFont("assets/Roboto-Medium.ttf");
}
function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  frameRate(5);
  //noLoop();

    if(width>=701){

      button1 = buttonShadow("/blog",1*width/7-30,height/2+margin ,width/5, "Blog");
      button2 = buttonShadow("/collection",3*width/7-30,height/2+margin ,width/5, "Collections");
      button3 = buttonShadow("/about",5*width/7-30,height/2+margin ,width/5, "About me");


      link1 = buttonNoshadow("mailto:salmonhumorous@gmail.com",width/6-width/20,height-1.5*margin ,width/9,"mail");
      link2 = buttonNoshadow("https://twitter.com/salmonhumorous",2*width/6-width/20,height-1.5*margin, width/9,"twitter");
      link3 = buttonNoshadow("https://github.com/salmonhumorous",3*width/6-width/20,height-1.5*margin ,width/9,"github");
      link4 = buttonNoshadow("https://www.fxhash.xyz/u/salmonhumorous",4*width/6-width/20,height-1.5*margin ,width/9,"fxhash");
      link5 = buttonNoshadow("https://objkt.com/profile/tz2DcwgdKAmWCEKhqMr54eSuAteTqXkyJeXM/created",5*width/6-width/20,height-1.5*margin ,width/9,"objkt");

      } else {


       button1 = buttonShadow("/blog",margin-30,height/2-50,width*0.4,"Blog", "15px");
       button2 = buttonShadow("/collection",margin-30,height/2+20,width*0.4,"Collections", "15px");
       button3 = buttonShadow("/about",margin-30,height/2+90,width*0.4,"About me", "15px");

       link1 = buttonNoshadow("mailto:salmonhumorous@gmail.com",margin-20,height-margin*2.5 ,width/5,"mail","7px");
       link2 = buttonNoshadow("https://twitter.com/salmonhumorous",margin-20+width*0.3,height-margin*2.5, width/5,"twitter","7px");
       link3 = buttonNoshadow("https://github.com/salmonhumorous",margin-20+width*0.6,height-margin*2.5 ,width/5,"github","7px");
       link4 = buttonNoshadow("https://www.fxhash.xyz/u/salmonhumorous",margin-20,height-margin*1.5 ,width/5,"fxhash","7px");
       link5 = buttonNoshadow("https://objkt.com/profile/tz2DcwgdKAmWCEKhqMr54eSuAteTqXkyJeXM/created",margin-20+width*0.3,height-margin*1.5 ,width/5,"objkt","7px");
    }


}

function draw() {
  background("#E6E49F");
  for (i=0;i<50;i++){
    push();
    fill(0,0,0,120);
    noStroke();
    circle(random(width),random(height),5);
  }
  homepage = new Homepage(width,height,margin);
  homepage.render();

}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  if(width>=701){
    desktopResize();
  } else {
    mobileResize();
  }

}


function desktopResize(){
  button1.position(1*width/7-30,height/2+margin);
  button1.style("padding", "28px");
  button1.size(width/5);
  button2.position(3*width/7-30,height/2+margin);
  button2.style("padding", "28px");
  button2.size(width/5);
  button3.position(5*width/7-30,height/2+margin);
  button3.style("padding", "28px");
  button3.size(width/5);

  link1.position(width/6-width/20,height-1.5*margin);
  link1.size(width/9);
  link1.style("padding", "10px");
  link2.position(2*width/6-width/20,height-1.5*margin);
  link2.size(width/9);
  link2.style("padding", "10px");
  link3.position(3*width/6-width/20,height-1.5*margin);
  link3.size(width/9);
  link3.style("padding", "10px");
  link4.position(4*width/6-width/20,height-1.5*margin);
  link4.size(width/9);
  link4.style("padding", "10px");
  link5.position(5*width/6-width/20,height-1.5*margin);
  link5.size(width/9);
  link5.style("padding", "10px");
}

function mobileResize(){
  button1.position(margin-30,height/2-50);
  button1.size(width*0.4);
  button1.style("padding", "15px");
  button2.position(margin-30,height/2+20);
  button2.size(width*0.4);
  button2.style("padding", "15px");
  button3.position(margin-30,height/2+90);
  button3.size(width*0.4);
  button3.style("padding", "15px");

  link1.position(margin-20,height-margin*2.5);
  link1.size(width/5);
  link1.style("padding","7px");
  link2.position(margin-20+width*0.3,height-margin*2.5);
  link2.size(width/5);
  link2.style("padding","7px");
  link3.position(margin-20+width*0.6,height-margin*2.5);
  link3.size(width/5);
  link3.style("padding","7px");
  link4.position(margin-20,height-margin*1.5);
  link4.size(width/5);
  link4.style("padding","7px");
  link5.position(margin-20+width*0.3,height-margin*1.5);
  link5.size(width/5);
  link5.style("padding","7px");
}
