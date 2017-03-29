/**
 * Created by Administrator on 2016/12/2 0002.
 */
//实现文件复制
//判断文件或者文件夹是否存在
var fs=require("fs");
fs.readdir("ect",function(err,data){
    if(err) {
        fs.mkdir("ect",function(err){
            if(err) return console.error(err);
                console.log("true")
        })
    }

})


    fs.readFile("ect/aa.text",function(err,data){
        if(err) {
            fs.writeFile("ect/aa.text","qinlulfulu" )
        }

    })



