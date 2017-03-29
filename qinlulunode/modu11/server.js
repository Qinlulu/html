/**
 * Created by Administrator on 2016/12/8 0008.
 */

var http=require("http")
http.createServer(function(req,res){
    //console.log(req.url)
    res.writeHead({
        "Content-Type":"text/html;charset=utf8",
        "Access-Control-Allow-Origin":"http://localhost:63342"
    })
    res.end("8080")
}).listen(8080,function(){
    console.log("8080")
})