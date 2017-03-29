/**
 * Created by Administrator on 2016/12/2 0002.
 */
//小文件拷贝
var fs=require("fs");
fs.readFile("resd.text",function(err,data){
    if(err) return console.error(err);
    //console.log(data.toString());

    fs.writeFile("reads.text",data,function(err){
        if(err) return console.error(err);
        console.log("this is true");
    })
})

//拷贝大文件
var readstream=fs.createReadStream("reads.text");
var writesream= fs.createWriteStream("rrrr.text");
readstream.pipe(writesream);

//拷贝完成
