;(function(_){
	window.ui=_
})(function(_){
	function isdrag(){
		//变量 外面可以传进来的值
		return{
			width:100,
			height:100,
			background:"red",
			top:"",
			left:"",
			id:"",
			text:"",
			//是否可以移动
			isdrags:true,
			remov:true
			//是否可以删除
		}
	}

	function Isdragg(args){
		var set=$.extend({},isdrag(),args)
		function creat(){
			var newBox=$("<div id='"+set.id+"'>"+set.text+"</div>").appendTo("body")
			newBox.css({"background":set.background,"width":set.width,"height":set.height})
		}

		this.creat=creat;
		this.creat();
	}

	function isdragg(_){
		return new Isdragg(_)
	}
	return{
		isdragg:isdragg
	}

}($))