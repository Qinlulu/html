/**
 * Created by Administrator on 2016/12/16.
 */

var fs=require("fs")
var path=require("path")
var http=require("http")

function  main(){

    http.createServer(function(req,res){
        //console.log(req.url)
        var url=req.url
        var urlname=url.split("/")[1]
        var pathname=path.join(__dirname,urlname)
        console.log(pathname)
        fs.readFile(pathname,function(err,data){
            res.end(data)
        })

    }).listen(8080)
}
main()