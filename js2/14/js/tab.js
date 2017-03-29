var  ck=document.getElementsByName('ck');
var  tab=document.getElementById('tab');
var tbody=tab.tBodies;  //数组 父元素.tBodies     
var thead=tab.tHead; //单个元素 父元素.tHead   父元素.tFoot
var rows=tbody[0].rows;//查找行    父元素.rows
//查找列  父元素.cells 列
//console.log(rows[1].cells[0])
//var  tbody=document.getElementsByTagName('tbody')
var  selectAll=document.getElementById('selectAll');
var  count=document.getElementById('count');
var  price=document.getElementById('price');
//遍历所有的复选框，单击ck 则。如果选中则 背景 色 ，否则不加背景色

/*for(var i=0;i<ck.length;i++){
	  ck[i].onclick=function(){
	  		if(this.checked){
	  			this.parentNode.parentNode.stylesheets.background='red'
	  		}else{
	  			this.parentNode.parentNode.stylesheets.background=''
	  		}
	  }
}*/

//遍历所有的行，单击的行的目标是哪个对象

for(var i=0;i<rows.length;i++){

	  rows[i].onclick=function(e){
	  	var event=e || window.event;
	  	var target=event.target || event.srcElement;
	  	 console.log(target)
	  	 // 复选框的背景 的颜色变化;
	  	 if(target.type=='checkbox'){
	  	 	   if(target.checked){
	  	 	   	   this.style.background='#ccc';
	  	 	   }else{
	  	 	   	  this.style.background=''
	  	 	   }
	  	 }
	  	 //判断点击加或者减的时候
	  	 var num=this.getElementsByTagName('input')[1]
	  	    
	  	 if(target.className=="jia"){	
	  	     // num.value++;  	
	  	     num.value=Number(num.value)+1; 	
	  	 		
	  	 }
	  	  if(target.className=="jian"){
	  	  	if(num.value>0){
	  	  	  num.value--;
	  	  	}
	  	 
	  	 }

	  	 //计算每个产品的总价：单价*数量
	  	 var p=parseFloat(this.cells[1].innerHTML)*num.value
	  	  this.cells[3].innerHTML=p.toFixed(2);

	  	 //删除
	  	 if(target.nodeName=='BUTTON'){
	  	 		tbody[0].removeChild(this)
	  	 }

	  	 getCount();


	  }
}




//全选/不选

selectAll.onclick=function(){
  
   for(var i=0;i<ck.length;i++){
   	  ck[i].checked=selectAll.checked;
   	  if(ck[i].checked){
   	  	 ck[i].parentNode.parentNode.style.background='#ccc'
   	  }else{
   	  	 ck[i].parentNode.parentNode.style.background=''
   	  }
   }

}

var  pic=document.getElementById('pic');

function  getCount(){
	var c=0;
	var p=0;
	var img='';
	var rows=tbody[0].rows;
	for(var i=0;i<rows.length;i++){
		if(rows[i].getElementsByTagName('input')[0].checked){
		c=c+Number(rows[i].getElementsByTagName('input')[1].value);
		p=p+parseFloat(rows[i].cells[3].innerHTML)
		img=img+rows[i].cells[4].innerHTML
		}

	}
    
  count.innerHTML=c;
  price.innerHTML=p.toFixed(2);
  pic.innerHTML=img;
}