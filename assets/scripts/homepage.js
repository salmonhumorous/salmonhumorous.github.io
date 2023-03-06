
let url;

class Homepage {
  constructor(width, height, margin) {

    this.height = height;
    this.width = width;
    this.margin = margin;

    this.firsttext = "Hello,";
    this.secondtext = "I am shubham";
    this.thirdtext = "Welcome to my website! I am excited to share my work with you and hope you find it interesting and engaging.\nIf you have any questions or feedback dont hesitate to reach out.";

  }

  render(){
    if(this.width>=701){
      this.desktop();
      }else{
    this.mobile();
    }
  }

  desktop(){
    // text block
    push();
    translate(this.margin+20,this.margin+20);
    fill("#003049");
    noStroke();
    textFont(font);
    let f1 = this.drawText(this.firsttext,0,10,this.width/20);
    textFont(font);
    let f2 = this.drawText(this.secondtext,f1.w+10,10,this.width/20);
    textFont(fontc);
    let f3 = this.drawText(this.thirdtext,0,f1.h+35,this.width/28);
    pop();



  }

  mobile(){
    // text block
    push();
    translate(this.margin-20,this.margin-20);
    fill("#003049");
    noStroke();
    textFont(font);
    let f1 = this.drawText(this.firsttext,0,10,this.width/19);
    textFont(font);
    let f2 = this.drawText(this.secondtext,f1.w+10,10,this.width/19);
    textFont(fontc);
    let f3 = this.drawText(this.thirdtext,0,f1.h+35,this.width/22);
    pop();



  }


  drawText(block,startx,starty,size){

    push();
    translate(startx,starty);
    textSize(size);
    text(block,0,0,this.width-this.margin*2.5,270);
    pop();

    let box_holder = font.textBounds(block,startx,starty,size);
    return box_holder;

  }


}

function buttonShadow(url, x, y, s, tex , pad = "28px") {

  const button = createButton(tex);

  button.position(x, y);
  button.size(s);

  button.mousePressed(() => {
    window.open(url, "_self");
  });

  button.style("background-color", "#f77f00");
  button.style("color", "black");
  button.style("font-family", "Roboto-Black");
  button.style("font-size", "20px");
  button.style("padding", pad);
  button.style("border", "none");
  button.style("border-radius", "25px");

  // Add a shadow effect to the button
  button.style("box-shadow", "4px 4px 12px rgba(0, 0, 0)");

  button.mouseOver(() => {
    button.style("background-color", "#003049");
    button.style("color", "white");
  });

  button.mouseOut(() => {
    button.style("background-color", "#f77f00");
    button.style("color", "black");
  });

  return button;

}

function buttonNoshadow(url, x, y, s, tex, pad = "10px") {

  const button = createButton(tex);

  button.position(x, y);
  button.size(s);

  button.mousePressed(() => {
    window.open(url, "_self");
  });

  button.style("background-color","#eae2b7" );
  button.style("color", "black");
  button.style("font-family", "Roboto-Black");
  button.style("padding", pad);
  button.style("border", "5px solid #003049");


  // Add a shadow effect to the button
  button.style("box-shadow", "5px -5px 0px #003049");

  button.mouseOver(() => {
    button.style("background-color", "#003049");
    button.style("color", "white");
  });

  button.mouseOut(() => {
    button.style("background-color", "#eae2b7");
    button.style("color", "black");
  });


  return button;

}




