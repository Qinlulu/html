;(function(){
	$.fn.sidel=function(pat){
		var that=$(this)
		function obj(){
			return {
				time:"2000",
				click:true
			}
		}

		var set=$.extend({},obj(),pat)
		var timer=null
		var index=0
		var len=that.find("ul").find("li").length

		function auto(){
			timer=setInterval(function(){
				move()

			},set.time)

		}
		auto()
		function move(){
			index++
				if(index>len-1)index=0
			that.find("ul").stop().animate({"left":-300},1000,function(){
						that.find("ul").find("li").eq(0).appendTo(that.find("ul"))
						that.find("ul").css("left",0)
				})
		change(index)
		}
		that.hover(function(){clearInterval(timer)},function(){auto()})

		function ull(){
			var div=$("<div class='div'></div>").appendTo(that)
			$(".div").css({"position":"absolute","bottom":"10px","text-align":"center","width":"100%","height":"30px"})
			for(var i=1;i<=len;i++){
				$("<a>"+i+"</a>").appendTo(div)
			}

			$(".div").find("a").css({"width":"30px","height":"30px","display":"inline-block","background":"#eee","border-radius":"30px","line-height":'30px',"margin":"0 5px"})
			}

			ull()

			function change(i){

				$(".div").find("a").eq(i).css("background","#999").siblings().css("background","#eee");

			}
			$(".div a").first().css("background","#999").siblings().css("background","#eee");

			if(set.click){
				var left=$("<span class='left'><</span>").appendTo(that)
				var right=$("<span class='right'>></span>").appendTo(that)

				$("span").css({"position":"absolute","top":"40%","width":"30px","height":"30px","display":"inline-block","background":"#eee","font-size":"25px"})
				left.css("left",10)
				right.css("right",10)

				left.on("click",function(){
					move()
				})
				right.on("click",function(){
					index--
					if(index<0)index=len-1
						that.find("ul").find("li").last().insertBefore(that.find("ul").find("li").eq(0))
					that.find("ul").css("left",-300)
					that.find("ul").stop().animate({"left":0},1000)
					change(index)


				})

			}





	}

})($)