function Cell(){
	
	this.no = width/w;
	this.count = 0;


	this.coordinates = [];  //STORES THE CO ORDINATE OF THE EDGES.
	this.main = [];         //STORES WHICH OF THE CELLS ARE MARKED ON THE GRID.


	for(var i = 0 ; i < this.no ; i++)
	{
		this.main[i] = [];
		for(var j = 0 ; j < this.no ; j++)
		{
			this.main[i][j] = 0;
		}
	}

	this.display = function(){
		
		
		for(var i = 0 ; i < this.no ; i++)
		{
			for(var j = 0 ; j < this.no ; j++)
			{
				stroke(0);
				strokeWeight(2);

				if(this.main[i][j] == 1)
				{
					fill(80);
				}
				else
				{
					fill(255);
				}

				rect(i*w,j*w,w,w);
			}
		}
	}
	
	this.addCoordinate = function(x,y){
		X = [x,y];
		console.log(X);
		this.main[y][x] = 1;
		this.coordinates[this.count] = [X[0],X[1]];
		this.count++; 
		//console.log(this.coordinates[this.count]);

	}

	this.traversal = function(pos){
		i = pos[0];
		j = pos[1];
	
		if(i + 1 == grid.no){
			i = 0;
			j = j + 1;
		}
		else{
			i = i + 1;
		}
	
		if(grid.main[i][j] == 0 && scanFlag){
			grid.main[i][j] = 1;
		}	

		else if(i<(grid.no-1) && !(horiFlag) && grid.main[i+1][j] == 1 & grid.main[i][j] == 1){
				horiFlag = !horiFlag;
				while(grid.main[i][j] == 1){
					i = i + 1;
				}
				j = j + 1;
				i = 0;
				horiFlag = !horiFlag;
			}
	
		else if(grid.main[i][j] == 1){
			scanFlag = !scanFlag;
		}
	
		pos[0] = i;
		pos[1] = j;
	}


}