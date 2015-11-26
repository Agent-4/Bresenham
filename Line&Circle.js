//画点
function point(x,y){
		var myDiv=document.createElement("div");
		myDiv.style.position='absolute';
		myDiv.style.height='1px';
		myDiv.style.width='1px';
		myDiv.style.backgroundColor='green';
		myDiv.style.left=x+'px';
		myDiv.style.top=y+'px';
		document.body.appendChild(myDiv);
		return myDiv; //返回的值是一个dom节点;
}
//BresenhamLine算法,经过一些处理;
function line(x0, y0, x1, y1){
	    var dx = Math.abs(x1-x0);
	    var dy = Math.abs(y1-y0);
	    var sx = (x0 < x1) ? 1 : -1;
	    var sy = (y0 < y1) ? 1 : -1;
	    var err = dx-dy;
	    
	    while(true){
	      point(x0,y0);

	      if ((x0==x1) && (y0==y1)) 
	     	 break;
	      var e2 = 2*err;
	     
	      if (e2 >-dy){ 
	     		 err -= dy; x0  += sx; 
	     	 }
	      if (e2 < dx){ 
	     		 err += dx; y0  += sy; 
	     	 }
	    }
}
//中点Bresenham画圆算法函数
function circle_MidBresenham(x, y, r) {  
    var px, py, d;  
    px = 0; py = r; d = 1 - r;  
    while (px < py) {  
        self.point(x + px, y + py);  
        self.point(x + py, y + px);  
        self.point(x - px, y + py);  
        self.point(x + py, y - px);  
        self.point(x + px, y - py);  
        self.point(x - py, y + px);  
        self.point(x - px, y - py);  
        self.point(x - py, y - px);  
        if (d < 0) 
        	d += 2 * px + 3;  
        else {  
            d += 2 * (px - py) + 5;  
            py--;  
        }  
        px++;  
    }  
}  
//画直线
function DrawLine(event) {
    var x1 = parseInt(document.getElementById('x1').value);
    var y1 = parseInt(document.getElementById('y1').value);
    var x2 = parseInt(document.getElementById('x2').value);
    var y2 = parseInt(document.getElementById('y2').value);
    line(x1, y1, x2, y2);
}
//画圆
function DrawCircle(event) {
	var x11 = parseInt(document.getElementById('x').value);
    var y11 = parseInt(document.getElementById('y').value);
    var r1 = parseInt(document.getElementById('r').value);
    circle_MidBresenham(x11, y11, r1);
}
