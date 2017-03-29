function addHander(obj,event,fn){
	if(obj.addEventListener){
		obj.addEventListener(event,fn,false)
	}else if(obj.attachEvent){   //this  指向window
		obj.attachEvent('on'+event,function(){
			fn.call(obj);
		});
	}else{
		obj["on"+event]=fn
	}
}



//获取class名字的元素
function getByClass(obj,clss){
		var elems=obj.getElementsByTagName("*")
		var arr=[]
		reg=new RegExp("\\b"+clss+"\\b")
		for(var i=0;i<elems.length;i++){
			if(reg.test(elems[i].className)){
				arr.push(elems[i])
			}
		}
		return arr
}


//获取非行内样式
function getStyle(obj,style){
	 if(obj.currentStyle){
	 	return  obj.currentStyle[style];
	 }else{
	 	return  getComputedStyle(obj,null)[style];
	 }
}


function  $(arg){
	  return  new MyJquery(arg);
}

function MyJquery(arg){
	 this.elements=[];
	 switch(typeof arg){
	 	 case  "function":
	 	      addHander(window,'load',arg);
	 	    break;
	 	 case "string":
	 	 	 switch(arg.charAt(0)){
	 	 	 	case "#":
	 	 	 	      var val=  document.getElementById(arg.substring(1));
	 	 	 	      this.elements.push(val);
	 	 	 	break;
	 	 	 	case ".":
	 	 	 	     this.elements=getByClass(document,arg.substring(1));
	 	 	 	break;
	 	 	 	default:
	 	 	 	    this.elements=document.getElementsByTagName(arg);

	 	 	 }	
	 	 break;
	 	  case  "object":
	 	  this.elements.push(arg);

	 }
}
//innerHTML  click  hover toggle  hide  show  css attr  eq
//扩展html方法 innerHTML
MyJquery.prototype.html=function(){
	return  this.elements[0].innerHTML;

}+

//扩展click方法
MyJquery.prototype.click=function(fun){
		for(var i=0;i<this.elements.length;i++){
			addHander(this.elements[i],'click',fun)
		}
}

//扩展css方法

MyJquery.prototype.css=function(attr,value){
if(arguments.length==2){
	for(var i=0;this.elements[i];i++){
		 this.elements[i].style[attr]=value;
	}
}else{
	 return  getStyle(this.elements[0],attr)
}
	
}

//hover  mouseover  mouseout

MyJquery.prototype.hover=function(fun1,fun2){
	for(var i=0;this.elements[i];i++){
		addHander(this.elements[i],'mouseover',fun1);
		addHander(this.elements[i],'mouseout',fun2);
	}
}

//扩展隐藏 显示的方法hide  show

MyJquery.prototype.show=function(){
	for(var i=0;this.elements[i];i++){
     	  this.elements[i].style.display='block';     
	}
}

MyJquery.prototype.hide=function(){
		for(var i=0;this.elements[i];i++){
     	  this.elements[i].style.display='none';     
	}
}

//扩展toggle

MyJquery.prototype.toggle=function(){
	var    _arg=arguments;
   for(var i=0;this.elements[i];i++){
        this.elements[i].index=0;  //0/3 1/3  2/3 3/3 4/3
   		this.elements[i].onclick=function(){
   			_arg[this.index%_arg.length].call(this);
   			this.index++;
   			/*if(this.index>_arg.length-1){
   				this.index=0;
   			}*/
   		}
   }
}

//扩展attr 属性  
MyJquery.prototype.attr=function(attr,value){
  if(arguments.length==2){
  	 for(var i=0;this.elements[i];i++){
  	 	  this.elements[i][attr]=value;
  	 }
  }else{
  	return  this.elements[0][attr]
  }

}

MyJquery.prototype.eq=function(n){
 return     $(this.elements[n])
}