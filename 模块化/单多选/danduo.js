;(function($){
	$.fn.filter=function(opt){
		var drop=function(){
			obj:null

		}
		var set=$.extend({},drop,opt)

		return $(this).each(function(){

			render(this)
			click()
		})
		function render(that){
			var selestD="<div class='head'><strong>已选</strong></div>"
			$(that).append($(selestD))
			if(set.obj.rDate){
				var con_box="<div class='rad'><div class='con_l' data-id='rd'>不限</div><ul class='con_r'>"
				$.each(set.obj.rDate,function(i,val){
					con_box+="<li data-id='rd'>"+val.name+"</li>"
				})
				 con_box+="</ul><span class='span'>更多 <i></i></span></div>"

			}
			$(that).append($(con_box))
			if(set.obj.cDate){
				var con_box="<div class='check'><div class='con_l' data-id='ck'>不限</div><ul class='con_r'>"
				$.each(obj.cDate,function(i,val){
					con_box+="<li data-id='ck'><input type='checkbox' data-val='"+i+"'/>"+val.name+"</li>"
				})
				 con_box+="</ul><span class='span'>更多<i></i></span></div>"
			}
			$(that).append($(con_box))
			}

		function click(){
			$(".span").on("click",function(){
				var h=$(this).prev().find("li").outerHeight(true)
				if(!$(this).find("i").hasClass("i")){
					$(this).find("i").addClass("i")
					$(this).prev().css("height","auto")
				}else{
					$(this).find("i").removeClass("i")
					$(this).prev().css("height",h)
				}
			})
			$("ul li").on("click",function(){

				if($(".head").find(".spans").length==0){
					$("<b class='spans'>全部清除</b>").appendTo(".head")
				}
				var ar=$(this).data("id")
				//console.log($(this).data("data"))
				if(ar=="rd"){
					$(this).parent().prev().removeClass("bg")
					$(this).addClass("bg").siblings().removeClass("bg")
					var txt=$(this).text()
					if($("#spans").length!=0){
						$("#spans").remove()
					}
					$(".head").append($("<span id='spans'>"+txt+"</span>"))
				}else{
					if(!$(this).hasClass("ck")){
					$(this).find("input").prop("checked",true)
					$(this).addClass("ck")
					var txt=$(this).text()
					var val=$(this).find("input").data("val")
					$(".head").append($("<span class='sa' data-val='"+val+"'>"+txt+"</span>"))
					if(!$(this).parent().prev().hasClass("bg")){

					}else{
						$(this).parent().prev().removeClass("bg")
					}
					}else{
						$(this).find("input").prop("checked",false)
						$(this).removeClass("ck")
						var txt=$(this).text()
						$(".sa").each(function(i,val){
							if($(this).text()==txt){
								$(this).remove()
							}
						})
					}
				}

			})
			$(".con_l").on("click",function(){
				var data=$(this).data("id")
				$(this).addClass("bg")
				if(data=="rd"){
					$("#spans").remove()
					$(this).next().find(".bg").removeClass("bg")
				}else{
					$(this).next().find(":checked").trigger("click")
				}
			})
			$(".head").on("click",".spans",function(){
				$(".con_l").trigger("click")
				$(this).remove()
			})
			$(".head").on("click","span",function(){
				var rid=$(this).attr("id")
				if(rid){
					$(".con_l[data-id=rd]").trigger("click")
				}else{
					var val=$(this).data("val");
					$("input[data-val="+val+"]").trigger("click")
				}
			})

		}
	}
})(jQuery)