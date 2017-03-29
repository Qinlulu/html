/**
 * Created by Administrator on 2016/12/6 0006.
 */
var http=require("http")
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"})
    res.end("qinlulu")
}).listen(8080)
