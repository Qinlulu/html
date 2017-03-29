//长方形
function rect(x,y,w,h,c){
	ctx.beginPath()  
	ctx.fillRect(x,y,w,h)
	ctx.fillStyle = c;
	ctx.fill()
}

//圆形
function can(x,y,z,zz){
	ctx.beginPath()    
	ctx.arc(x , y , z , Math.PI*(0/180) , Math.PI*(360/180) , false );
	ctx.fillStyle=zz
	ctx.fill()
}
//左弧度
function cans(x,y,z,zz){
	ctx.beginPath()    
	ctx.arc(x , y , z , Math.PI*(354/180) , Math.PI*(84/180) , false  );
	ctx.strokeStyle=zz
	ctx.stroke()
}

//右弧度
function canss(x,y,z,zz){
	ctx.beginPath()    
	ctx.arc(x , y , z , Math.PI*(90/180) , Math.PI*(180/180) , false  );
	ctx.strokeStyle=zz
	ctx.stroke()
}

