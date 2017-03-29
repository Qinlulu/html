$("#button").on("click",function(){
	var val=$("#text").val()
	var str1='<dl>'+
				'<dt><img src="images/img.jpg" alt=""></dt>'+
				'<dd>'+val+'</dd>'+
			'</dl>'
	$(".main").append($(str1))
	$.ajax({
		url:"http://www.tuling123.com/openapi/api",
		data:{
			key:"3a8451a4632c4bd5b828b6130f951ef8",
			info:val,
			userid:"12345678"
		},
		dataType:"json",
		success:function(data){
			var str='<dl>'+
						'<dt><img src="images/img.jpg" alt=""></dt>'+
						'<dd>'+data.text+'</dd>'+
					'</dl>'
			$(".main").append($(str))
		}
	})
})