//跨浏览器的事件处理程序
function addHander(obj,event,fn){
	//DOM2
	if(obj.addEventListener){
		obj.addEventListener(event,fn,false);
	}else if(obj.attachEvent){
		obj.attachEvent('on'+event,fn);
	}else{
		obj['on'+event]=fn;
	}
}

//获取样式名为text的所有标签
function  getByClass(obj,clsName){
		var  eles=obj.getElementsByTagName('*');
		var  arr=[];
		var reg=new RegExp("\\b"+clsName+'\\b');
		for(var i=0;eles[i];i++){
			if(reg.test(eles[i].className)){
				arr.push(eles[i]);

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
     return new  MyJquery(arg); //返回一个对象
	
}

function MyJquery(arg){
		this.elements=[];
		//function   string   ()
		// object
		switch(typeof arg){
			case "function": //如果是函数，执行函数
			//addHander(对象，事件，函数)
			addHander(window,"load",arg);
			break;
			case "string":
					switch(arg.charAt(0)){
                        case "#":
                         var val=document.getElementById(arg.substring(1));
                         this.elements.push(val);
                         break;
                         case '.':
                         this.elements=getByClass(document,arg.substring(1));
                         break;
                         default:
                         this.elements=document.getElementsByTagName(arg);
					}
            break;
            case "object":
            this.elements.push(arg);
		}

}

//获取内容  
MyJquery.prototype.html=function(){
	return this.elements[0].innerHTML
}

//单击事件
MyJquery.prototype.click=function(fun){
	for(var i=0;i<this.elements.length;i++){
		  addHander(this.elements[i],'click',fun);
	}
}

//扩展隐藏的方法
MyJquery.prototype.hide=function(){
	for(var i=0;i<this.elements.length;i++){
		 this.elements[i].style.display='none';
	}
}
//扩展显示的方法

MyJquery.prototype.show=function(){
	for(var i=0;i<this.elements.length;i++){
		 this.elements[i].style.display='block';
	}
}

//扩展css样式
MyJquery.prototype.css=function(attr,value){
	
	if(arguments.length==2){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style[attr]=value;
	}
}else{
		return  getStyle(this.elements[0],attr)
}

}


/*$(function(){
	alert('aaaa')
})*/

//document.getELementById(arg.substring(1))

//substring(开始下标，结束下标)
//slice()
//substr(开始下标，长度)
//charAt(下标)