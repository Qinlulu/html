;(function($){
	$.fn.city=function(opt){
		var set=$.extend({
			data:[city.citylist,"p","c","n","a","s"]
		},opt)
		return $(this).each(function(){
			//渲染第一个下拉
			var o=set.data[0],//city.citylist
			    t=set.data[1],//p
			    s=set.data[2],//c[i].n
			    f=set.data[3],//n
			    ff=set.data[4],//a
			    ss=set.data[5],//s
			    str="";
			$("<select id='sele'></select>").appendTo("#box")
			for(var i in o){
				str+="<option value="+o[i][t]+">"+o[i][t]+"</option>"
			}
			$("#sele").html(str)
			//第一个下拉列表点击时 出现第二栏目
			$("#sele").change(function(){
				$("#seless").remove()
				if(!o[0][s]){
					alert("没有此详细信息")
				}else{
					//获取选中项的下标
					var index=$("option:selected").index()

					var str1="";
					if($("#seles").length!=0){
						$("#seles").remove()
					}
					$("<select id='seles'></select>").appendTo("#box")
					for(var i in o[index][s]){
						str1+="<option value="+o[index][s][i][f]+">"+o[index][s][i][f]+"</option>"
					}
					$("#seles").html(str1)
				}
				//点击第二栏出现第三栏  并且判断
				$("#seles").change(function(){
					if(!o[index][s][0][ff]){
						alert("没有详细信息")
						$("#seless").remove()
					}else{
					var indexs=$(this).find("option:selected").index()
					var str3=""
					if($("#seless").length!=0){
					$("#seless").remove()
					}
					$("<select id='seless'></select>").appendTo("#box")
					for(var i in o[index][s][indexs][ff]){
						str3+="<option value="+o[index][s][indexs][ff][i][ss]+">"+o[index][s][indexs][ff][i][ss]+"</option>"
					}
					$("#seless").html(str3)
					//alert(city.citylist[index].c[indexs].a[0].s)
					}
					$("#seless").change(function(){
						alert($(this).find("option:selected").text())
					})
				})
			})
		})
	}
})(jQuery)