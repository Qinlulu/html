/**
 * Created by Administrator on 2016/12/15.
 */

var http=require("http")
var path=require("path")
var fs=require("fs")

function main(){
    var str=""
    http.createServer(function(req,res){

       // res.end("hello")
        var url=req.url
        if(url.indexOf("??")==-1){
            url=url.replace("/","/??")
        }
        var basename=url.split("??")
        var basenames=basename[0]
        var basenamet=basename[1].split(",")

        var base=basenamet.map(function(val){
            baset=path.join(__dirname,basenames,val)
            //console.log(baset)

            fs.readFile(baset,function(err,data){
                str+=data+"\n"
            })
            res.end(str)
            // str=""
            /*console.log("4545")
            console.log(baset)*/
        })

        //console.log(basename)
    }).listen(8080)
}
main()

