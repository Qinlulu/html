$.ajax({
	url:"http://leboapi.baidu.com/leboapi/tag",
	data:{
		type:"getRootTagList",
		edit:0,
		apiver:2,
		from:"lebowebapp",
		terminal:"pcweb",
		app:121
	},
	dataType:"jsonp",
	success:function(data){
		var data=data.data
		var str=""
		for(var i=0;i<data.length;i++){
			str+="<span>"+data[i].tag_name+"</span>"
		}
		str+="<span></span><span></span>"

		$(".main-top1").html(str)

	}

})
$.ajax({
	url:"http://leboapi.baidu.com/leboapi/business",
	data:{
		type:"getHotList",
		limit:6,
		args:"album.*,song.*,song.album.*,song.pic,tag,song.album.tag",
		terminal:"android",
		apiver:2,
		from:"lebowebapp",
		app:121
	},
	dataType:"jsonp",
	success:function(data){
		var data=data.data
		console.log(data)

		var str=""
		var str1=""
		for(var i=0;i<data.length;i++){
			if(data[i].song_title==undefined){
				data[i].song_title=data[i].album_title
			}
			str+='<dl>'+
					'<dt>'+
						'<img src="'+data[3].song_pic[0].pi_link+'" alt="DL图片">'+
					'</dt>'+
					'<dd>'+
						'<p>'+data[i].song_title+'</p>'+
						'<span>#音乐</span>'+
					'</dd>'+
				'</dl>'
		}
		$(".main-top2").html(str)
	}

})
$.ajax({
	url:"http://leboapi.baidu.com/leboapi/rank",
	data:{
		type:"getRanking",
		rank_type:2,
		args:"album.*,album.album_end, album.pic",
		start:1,
		limit:10,
		apiver:2,
		from:"lebowebapp",
		terminal:"pcweb",
		app:121
	},
	dataType:"jsonp",
	success:function(data){
		var data=data.data

		var str=""
		var str1=""
		for(var i=0;i<data.length;i++){
			console.log()
			str+='<dl>'+
					'<dt>'+
						'<img src="'+data[i].album_pic[0].pi_link+'" alt="DL图片">'+
					'</dt>'+
					'<dd>'+
						'<h4>'+data[i].album_title+'</h4>'+
						'<p>'+data[i].artist_name+'</p>'+
						'<p><span>音乐</span><i>音乐推荐</i></p>'+
					'</dd>'+
					'<dd class="id">'+data[i].album_id+'</dd>'+
				'</dl>'
		}
		$(".main-top3").html(str)
	}

})