var banner=document.querySelector(".banner")
var bannerside=document.querySelector(".bannerside")
var list=bannerside.querySelectorAll("li")
var ol=document.querySelector(".ol")
var lists=ol.querySelectorAll("li")
var nums=bannerside.clientWidth;


var startX=0,ensX=0;
banner.addEventListener("touchstart",function(e){
	var touch=e.touches[0]
	startX=touch.pageX;
	endX=startX;
})
banner.addEventListener("touchmove",function(e){
	var index=goindex(bannerside.querySelector("li.on"))
	var num=0
	var touch=e.touches[0]
	endX=touch.pageX;
	num=startX-endX;
	console.log(index)

	if(num>0){//左划
		if(index==0){
			num=-num
		}else{
			num=(-nums*index)-num
		}
		
	}else{//右划
		if(index==0){
			num=0
		}else{
			num=(-nums*index)-num
		}
		
	}

	goins(num)
})

banner.addEventListener("touchend",function(e){
	var index=goindex(bannerside.querySelector("li.on"))
	var num=startX-endX;
	if(num>0){//左话
		num=nums
		index++
		index=index>list.length-1?list.length-1:index;
	}else{//右
		index--
		index=index<0?0:index;
	}
	color(index)
})


function goindex(obj){
	var index=0;
	for(var i=0;i<list.length;i++){
		if(list[i]==obj){
			index=i
		}
	}
	return  index;
}
function goins(numss){
	bannerside.style["-webkit-transition"]="all .3s linear";
	bannerside.style["-webkit-transform"]="translateX("+numss+"px)";
}

function color(index){
	bannerside.style["-webkit-transition"]="all .5s linear";
	bannerside.style["-webkit-transform"]="translateX(-"+100*index+"%)";
	for(var i=0;i<list.length;i++){
		list[i].className=""
	}
	list[index].className="on"

	for(var i=0;i<lists.length;i++){
		lists[i].className=""
	}
	lists[index].className="color"
}
