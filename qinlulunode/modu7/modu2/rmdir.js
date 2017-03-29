/**
 * Created by Administrator on 2016/12/2 0002.
 */
var fs=require("fs");

//判断文件夹是否存在  不存在报错
fs.readdir("ect",function(err){
    if(err) {
        //添加文件夹  如果已经有了 报错
        fs.mkdir("ect",function(err){
             if(err) return console.error(err);
            console.log("this true")
        })
    }else{
        console.log("this is true")
    }
})
