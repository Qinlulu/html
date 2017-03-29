var video = $('#audio');
$(".play").click(function(){  video[0].play();  });
$(".pause").click(function(){ video[0].pause(); });
$(".main-top3").on("click","dl",function(){
    var id=$(this).find(".id").text()
$.ajax({
    url:"http://leboapi.baidu.com/leboapi/album",
    data:{
        type:"getAlbumDetail",
        args:"*,songlist.song.pic",
        album_id:id,
        start:1,
        sort:"updatetime_desc",
        apiver:2,
        from:"lebowebapp",
        terminal:"pcweb",
        app:121
    },
    dataType:"jsonp",
    success:function(data){
        console.log(data)
        var data=data.data
        var str=""
        for(var i=0;i<data.song_list.length;i++){
            str+='<li>'+data.song_list[i].song_title+'</li>'
        }
        $(".ul").html(str)
    }
})
})

$(".eject").on("click",function(){
    $(".ul").toggle()
})

$(".ul").on("click","li",function(){
    $(this).css({"background":"orange","color":"#fff"}).siblings().css({"background":"","color":""})
})