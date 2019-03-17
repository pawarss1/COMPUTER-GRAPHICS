var cnv;
var coordinates = [];
var position = 80;


function centerCanvas(){
  var x = (windowWidth - width)/2;
  var y = (windowHeight - height)/2;
  cnv.position(x,y);
}
function windowResized(){
  centerCanvas();
}

function setup() {
  // put setup code here
  cnv = createCanvas(800,800);
  centerCanvas();
  background(255);  

  angleMode(DEGREES);

  arrangeButton();

  
}



function draw() {
  // put drawing code here

  background(255);
  strokeWeight(2);
  line(width/2,0,width/2,height);
	line(0,height/2,width,height/2);
  
  
  line(0,0,0,height);
  line(width,0,width,height);
  line(0,0,width,0);
  line(width,0,width,height);
  makeFig();
  
}

function mousePressed(){
  if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseX < height){
      coordinates[coordinates.length] = normalTo4Quadrant([mouseX, mouseY]);
      
  }
}



function normalTo4Quadrant(pos){
  //console.log("inside normal to quad");
  var x = pos[0] - width/2;
  var y = pos[1] - height/2;
  //console.log(x,y);
  return [x,-y];
}

function quadrantToNormal(pos){
    //console.log("inside quad to nor");
    var x = pos[0] + width/2;
    var y = -pos[1] + height/2;
    //console.log(x,y);
    return [x,y];
}

function makeFig(){
  
  var p1 =[];
  var p2 = [];
  if(coordinates.length != 0){
    stroke(0);
    strokeWeight(2);
    
    

    for(var i = 0; i < coordinates.length - 1; i++){
      stroke(0);
      strokeWeight(2);
      p1 = quadrantToNormal(coordinates[i]);
      p2 = quadrantToNormal(coordinates[i+1]);
      line(p1[0], p1[1], p2[0], p2[1]);
    }
    
    stroke(0);
    strokeWeight(2);
    p1 = quadrantToNormal(coordinates[0]);
    p2 = quadrantToNormal(coordinates[coordinates.length - 1]);
    line(p1[0], p1[1], p2[0], p2[1]);
  }
}


function arrangeButton(){
    reflectYButton = createButton('reflect x=-x y=y');
    reflectYButton.position(0,position);
    reflectYButton.mousePressed(ReflectY);
    position = position + 20;



    reflectXButton = createButton('reflect x=x y=-y');
    reflectXButton.position(0,position);
    reflectXButton.mousePressed(ReflectX);
    position = position + 20;
  
    reflectXYNegButton = createButton('reflect x=-x y=-y');
    reflectXYNegButton.position(0,position);
    reflectXYNegButton.mousePressed(ReflectXYNeg);
    position = position + 20;
    
    reflectYXButton = createButton('reflect x=y y=x');
    reflectYXButton.position(0,position);
    reflectYXButton.mousePressed(ReflectYX);
    position = position + 20;
    

    reflectNegYXButton = createButton('reflect x=-y y=x');
    reflectNegYXButton.position(0,position);
    reflectNegYXButton.mousePressed(ReflectNegYX);
    position = position + 20;
    

    reflectYNegXButton = createButton('reflect x=y y=-x');
    reflectYNegXButton.position(0,position);
    reflectYNegXButton.mousePressed(ReflectYNegX);
    position = position + 20;
    

    reflectNegYNegXButton = createButton('reflect x=-y y=-x');
    reflectNegYNegXButton.position(0,position);
    reflectNegYNegXButton.mousePressed(ReflectNegYNegX);
    position = position + 20;


    translateButton = createButton('Translate');
    translateButton.position(0,position);
    translateButton.mousePressed(Translate);
    position = position + 20;

    scaleButton = createButton('Scale');
    scaleButton.position(0,position);
    scaleButton.mousePressed(Scale);
    position = position + 20;
    
    
    rotateButton = createButton('Rotate');
    rotateButton.position(0,position);
    rotateButton.mousePressed(Rotate);
    position = position + 20;


    inputX = createInput();
    inputX.position(0, position);
    position = position + 20;

    inputY = createInput();
    inputY.position(0, position);
    position = position + 20;
    
    

    
  }




function ReflectY(){
  for(var i = 0; i < coordinates.length; i++){
      coordinates[i][0] = -coordinates[i][0]; 

  }
}

function ReflectX(){
  for(var i = 0; i < coordinates.length; i++){
    coordinates[i][1] = -coordinates[i][1]; 

  }

}


function ReflectXYNeg(){
  for(var i = 0; i < coordinates.length; i++){
    coordinates[i][0] = - coordinates[i][0];
    coordinates[i][1] = -coordinates[i][1]; 

  }

}


function ReflectYX(){
  var temp;
  for(var i = 0; i < coordinates.length; i++){
    temp = coordinates[i][0];
    coordinates[i][0] = coordinates[i][1];
    coordinates[i][1] = temp; 

  }

}


function ReflectNegYX(){
  var temp;
  for(var i = 0; i < coordinates.length; i++){
    temp = coordinates[i][0];
    coordinates[i][0] = -coordinates[i][1];
    coordinates[i][1] = temp; 

  }

}


function ReflectYNegX(){
  var temp;
  for(var i = 0; i < coordinates.length; i++){
    temp = coordinates[i][0];
    coordinates[i][0] = coordinates[i][1];
    coordinates[i][1] = -temp; 

  }

}

function ReflectNegYNegX(){
  var temp;
  for(var i = 0; i < coordinates.length; i++){
    temp = coordinates[i][0];
    coordinates[i][0] = -coordinates[i][1];
    coordinates[i][1] = -temp; 

  }

}

function Translate(){
  
  var tx = int(inputX.value());
	var ty = int(inputY.value());
  
  for(var i = 0; i < coordinates.length; i++){
    coordinates[i][0] += tx;
    coordinates[i][1] += ty; 

  }
}

function Scale(){
  
  var sx = int(inputX.value());
  var sy = int(inputY.value());
  
  for(var i = 0; i < coordinates.length; i++){
    coordinates[i][0] *= sx;
    coordinates[i][1] *= sy; 

  }
}

function Rotate(){
  var choice = inputX.value();
  var angle = int(inputY.value());
  var a, b;
  //console.log(choice);
  if(choice == 'CW'){
      console.log("Inside acw");
      console.log(cos(angle));
      for(var i = 0; i < coordinates.length; i++){
        a = coordinates[i][0];
        b = coordinates[i][1];

        coordinates[i][0] = a*cos(angle) + b*sin(angle);
        coordinates[i][1] = b*cos(angle) - a*sin(angle); 
      }
  }
  else if(choice == 'ACW'){
      for(var i = 0; i < coordinates.length; i++){
        a = coordinates[i][0];
        b = coordinates[i][1];

        coordinates[i][0] = a*cos(angle) - b*sin(angle);
        coordinates[i][1] = b*cos(angle) + a*sin(angle); 
      }
  }
}