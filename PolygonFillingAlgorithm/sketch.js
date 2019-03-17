//POLYGON FILLING ALGORITHM.
var cols, rows;
var w = 40;
var grid; 
var scanLineStart = [0,0];
var fillFlag = false;	//FLAG TO MARK THE BEGINNING OF THE FILLING PROCESS.
var scanFlag = false;	//FLAG TO MARK THE NEXT SCANLINE.
var horiFlag = false;	//FLAG TO CHECK THE HORIZONTAL LINE.




function setup() {
  // put setup code here
  createCanvas(400,400);
  cols = floor(width/w);
  rows = floor(height/w);

  grid = new Cell();
  frameRate(5);
}

function draw() {
  // put drawing code here
  background(0);
  grid.display(); 
  fill(255,0,120);
  rect(scanLineStart[0]*w,scanLineStart[1]*w,w,w);

  if(fillFlag == true){
  	grid.traversal(scanLineStart);	
  }

}

function mousePressed(){
	y = floor(mouseX/w);
	x = floor(mouseY/w);
	
	grid.addCoordinate(x,y);
}

function keyPressed(){
	if(keyCode == 65){
		fillFlag = true;
	}
}