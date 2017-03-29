/**
 * Created by Administrator on 2016/12/3 0003.
 */

var http=require("http")
http.createServer(function(req,res){
    console.log("qinlulu")
    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"})
    res.end("qinlul")
}).listen(8980)



