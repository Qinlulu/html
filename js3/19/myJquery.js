function addHander(obj,event,fn){
	//DOM2
	if(obj.addEventListener){
		obj.addEventListener(event,
			function(e){
				if(fn.call(this)==false){
					//阻止默认行为
					e.preventDefault();
					//阻止冒泡
					e.stopPropagation();
				}
			}
			,false)
  //IE
	}else if(obj.attachEvent){   //this  指向window
		obj.attachEvent('on'+event,function(){
		      if(fn.call(this)==false){
		      	//return false;
		      	// //阻值默认行为
		      	window.event.returnValue=false;
		      	//阻止冒泡
		      	window.event.cancelBubble=true;
		      }
		});
	}else{
		obj["on"+event]=fn
	}
}


//绑定插件
MyJquery.prototype.extend=function(name,fun){
	MyJquery.prototype[name]=fun;
}


/*MyJquery.prototype.animate=function(){
	 alert('aaaaaaa')
}*/
 

//IE   window.event.cancelBubble=true;
//DOM   e.stopPropagation()
/*IE: returnvalue=false
DOM: preventDefault();*/

/*btn.onclick=function(e){
	var event=e || window.event;

	   window.event.returnvalue=false
	   e.preventDefault()

}*/

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

}

//扩展click方法
MyJquery.prototype.click=function(fun){
		for(var i=0;i<this.elements.length;i++){
			addHander(this.elements[i],'click',fun)
		}

	return this;
}
//扩展css方法    json串  
MyJquery.prototype.css=function(attr,value){
if(arguments.length==2){
	for(var i=0;this.elements[i];i++){
		 this.elements[i].style[attr]=value;
	}
}else{
		if(typeof attr=='string'){
	       return  getStyle(this.elements[0],attr)
		}else{
			for(var i=0;this.elements[i];i++){
					for(t in attr){
						//t属性名  {}  attr[t] 值
						this.elements[i].style[t]=attr[t];
					}
			}
		}
}
	

return this
}
//hover  mouseover  mouseout
MyJquery.prototype.hover=function(fun1,fun2){
	for(var i=0;this.elements[i];i++){
		addHander(this.elements[i],'mouseover',fun1);
		addHander(this.elements[i],'mouseout',fun2);
	}

	return this;
}

//扩展隐藏 显示的方法hide  show

MyJquery.prototype.show=function(){
	for(var i=0;this.elements[i];i++){
     	  this.elements[i].style.display='block';     
	}

	return this;
}

MyJquery.prototype.hide=function(){
		for(var i=0;this.elements[i];i++){
     	  this.elements[i].style.display='none';     
	}

	return  this;
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
   return  this;
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


return this
}

MyJquery.prototype.eq=function(n){
 return     $(this.elements[n])
}

//查找子元素

  MyJquery.prototype.find=function(str){
        var arr=[];
        for(var i=0;i<this.elements.length;i++){
                switch(str.charAt(0)){
                   case  ".":
                     arr=arr.concat(getByClass(this.elements[i],str.substring(1)));
                     break;
                  default:
                  var els=this.elements[i].getElementsByTagName(str);
                      for(var j=0;j<els.length;j++){
                         arr.push(els[j]); 
                      }

                }

              }

              var  newObj=$();  //
                    newObj.elements=arr;

              return newObj;

     }

//查找下标
 function   getIndex(obj){
          var eles=obj.parentNode.children;
          for(var i=0;i<eles.length;i++){
                if(eles[i]==obj){
                  return  i;
                }
          }

     }

    MyJquery.prototype.index=function(){
        return  getIndex(this.elements[0]);
    }


MyJquery.prototype.bindEvent=function(event,fun){
	for(var i=0;i<this.elements.length;i++){
			addHander(this.elements[i],event,fun);
	}
}

