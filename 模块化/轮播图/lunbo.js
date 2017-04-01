$(function(){
	//不是匀速
	/*function scroll(){
		$("#pic").animate({"left":-900},1000,function(){
			$("#pic").css("left",0)
			scroll()
		})
	}
	scroll()
	$("#wrap").hover(function(){
		$("#pic").stop()
	},function(){
		scroll()
	})*/
	//匀速

	function scroll(){
		var time=3000;
		$("#pic").animate({"left":-900},{
			duration:time,
			easing:"linear",
			step:function(){
				var left=parseInt($("#pic").css("left"));
				time=(900+left)*(900/3000)//求出秒数
			},
			complete:function(){
				$("#pic").css("left",0)
				scroll()
			}
		})
	}
	$("#wrap").hover(function(){
		$("#pic").stop()
	},function(){
		scroll()
	})
	scroll()
})
