

	function $(arg){
		return new MyJquery(arg);
	}

//封装一个兼容DOM2 DOM0级的事件处理程序

	function addHandler(obj,event,fun){
		if(obj.addEventListener){
			obj.addEventListener(event,function(e){
				//如果说函数的返回值是false
				if(fun.call(obj)==false){
					//阻止冒泡
					e.stopPropagation();
					//阻止默认行为
					e.preventDefault();
				}
			},false);
		}
		else if(obj.attachEvent){
			obj.attachEvent("on"+event,function(){
				//如果说函数的返回值是false
				if(fun.call(obj)==false){
					//阻止冒泡
					window.event.cancelBubble=true;
					//阻止默认行为
					return false
				}
			})
		}
		else{
			obj["on"+event]=fun;
		}
	}
//封装一个函数获取非行内样式
function getStyle(obj,style){
	if(obj.currentStyle){
		return obj.currentStyle[style];
	}
	else{
		return getComputedStyle(obj,null)[style];
	}
}


//封装一个函数求页面中包含cls样式的所有标签
function getByClass(obj,cls){

			var eles=obj.getElementsByTagName("*");
			var arr=[];
			var reg=new RegExp("\\b"+cls+"\\b");
			for(var i=0;i<eles.length;i++){
				if(reg.test(eles[i].className)){
					arr.push(eles[i])
				}
			}
			return arr;
		}

		function MyJquery(arg){
			this.eles=[];
			switch(typeof arg){
				case "function":
				addHandler(window,"load",arg);
				break;
				case "string":
					switch(arg.charAt(0)){
						case "#":
					var val=document.getElementById(arg.substr(1));
					this.eles.push(val);
					break;
						case ".":
					this.eles=getByClass(document,arg.substr(1));
					break;
					default:
					this.eles=document.getElementsByTagName(arg);
					}
				break;
				case "object":
				this.eles.push(arg);	
			}
		}
//显示数组中第一元素的innerhtml
	MyJquery.prototype.html=function(){
	return this.eles[0].innerHTML;
	}

//在原型上扩展一个单击事件
	MyJquery.prototype.click=function(fun){
		for(var i=0;this.eles[i];i++){
			addHandler(this.eles[i],'click',fun)
		}
		return this;
	}

	MyJquery.prototype.css=function(attr,val){
		if(arguments.length==2){
			for(var i=0;this.eles[i];i++){
				this.eles[i].style[attr]=val;
			}
		}
		else{
			return getStyle(this.eles[0],attr);
		}
		return this;
	}
//在原型上添加一个方法，当一个参数的时候获取该数组中第一个元素的属性
//当为两个仓鼠的时候进行设置
	MyJquery.prototype.attr=function(name,value){
		if(arguments.length==2){
			for(var i=0;this.eles[i];i++){
				this.eles[i][name]=value;
			}
		}
		else{
			return this.eles[0][name];
		}
		return this
	}

	MyJquery.prototype.hover=function(fun1,fun2){
		for(var i=0;this.eles[i];i++){
			addHandler(this.eles[i],'mouseover',fun1);
			addHandler(this.eles[i],"mouseout",fun2)
		}
		return this;
	}

//扩展show

MyJquery.prototype.show=function(){
	for(var i=0;this.eles[i];i++){
		this.eles[i].style.display="block";
	}
	return this;
}
	
//扩展hide 方法

MyJquery.prototype.hide=function(){
	for(var i=0;this.eles[i];i++){
		this.eles[i].style.display="none";
	}
	return this;
}
//扩展toggle方法
	MyJquery.prototype.toggle=function(){
		var _arg=arguments;
		for(var i=0;this.eles[i];i++){
			this.eles[i].index=0;
			this.eles[i].onclick=function(){
				_arg[this.index%_arg.length].call(this);
				this.index++;
				/*if(this.index>_arg.length-1) 
					{
						this.index=0;
					}*/
		
			}
		}
		return this;
	}

MyJquery.prototype.eq=function(n){
	return $(this.eles[n]);
}

//找到相应元素的下标

function getById(obj){
	var eles=obj.parentNode.children;
	for(var i=0;i<eles.length;i++){
		if(eles[i]==obj)
			return i;
		
	}
}

MyJquery.prototype.index=function(){
	return getById(this.eles[0]);
}

	
//查找子元素
	
MyJquery.prototype.find=function(str){  //找子元素
     var arr=[];
     for(var i=0;i<this.eles.length;i++){
         switch(str.charAt(0)){
            case '.':
               arr = arr.concat(getByClass(this.elements[i],str.substring(1)));
               break;
            default:
            	//这个获取的是类数组不能用数组的方法
           // arr =arr.concat(this.eles[i].getElementsByTagName(str));
             var els = this.eles[i].getElementsByTagName(str);
             for(var j=0;j<els.length;j++){
                 arr.push(els[j]);
             }

         }
     }
     var newIns=$();
     newIns.eles=arr;
     return newIns;

 }

//在原型上添加一个bindEvent方法

MyJquery.prototype.bindEvent=function(event,fun){
	for(var i=0;i<this.eles.length;i++){
		addHandler(this.eles[i],event,fun)
	}
}
//实现接口继承
MyJquery.prototype.extend=function(name,fn){
	MyJquery.prototype[name]=fn;
}