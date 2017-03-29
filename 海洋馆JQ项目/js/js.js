/**
 * Created by Administrator on 2016/10/25 0025.
 */
;(function(){
	//我的第五大道
			$(".lii").on("mouseover",function(){
				$(".my5lux").slideDown(1000)
			})
			$(".my5lux").hover(function(){$(this).show()},function(){$(this).slideUp(1000)})
			$(".li2").hover(function(){
				$(".appload").slideDown(1000)
			},function(){
				$(".appload").slideUp(1000)
			})
			$(".navmain li").hover(function(){
				$(this).css({"background":"#cf0101"}).siblings().css({"background":""})
			})


		//商品分类
		$(".list1").hover(function(){
			$(".list2").slideDown(1000)
		})

		$("#ddd").hover(function(){},function(){
			$(".list2").slideUp(1000)
			$(".list3").hide()
		})
		$(".list2 li").hover(function(){
			var index=$(this).index()
			$(this).css("background","url(img/public/nav2.png) no-repeat").siblings().css("background","url(img/public/nav1.png) no-repeat")
			$(".list3").show().find("div").eq(index).show().siblings().hide()

		})
		$(".navbao li").hover(function(){
			$(this).animate({"width":"120px"},500)
		},function(){
			$(this).animate({"width":"26px"},500)
		})
		$(".SideBar li").hover(function(){
			$(this).find("div").fadeIn(1000)
		},function(){
			$(this).find("div").fadeOut(100)
		})
})($)

