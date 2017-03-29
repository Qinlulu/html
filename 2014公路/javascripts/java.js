var index=0;
var num=0;
$(document).on("swipeLeft",function(){
	index++
	if(index>4){
		index=0
	}
	list(index)
	rotate(index)
	side()
});

$(document).on("swipeRight",function(){
	index--
	if(index<0){
		index=4
	}
	list(index)
	rotate(index)
	side()
  	
});

function list(index){
	$(".list li").eq(index).addClass("on").siblings().removeClass("on");
}

function rotate(index){
	num=index*72
	$(".img3").css({
  		"transtion":"all 5s ease",
  		"transform":"rotate(-"+num+"deg)"
  	})
}

