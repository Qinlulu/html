/**
 * Created by Nan on 2016/10/31.
 */
//导入nodejs 文件系统模块
//var fs = require("fs");
//fs.readFile('data.json', function (err, data ) {
//    if (err) {
//        return console.error(err);
//    }
//    var datas = data.toString();
//    console.log("异步读取: " +datas);
//    console.log("异步读取: " +datas);
//    console.log("异步读取: " +typeof (datas));
//    console.log("异步读取: " +typeof (data));
//});

//console.log("准备打开文件！");
//fs.open('input.txt', 'r', function(err, data) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("文件打开成功！");
//});

//var fs = require("fs");
//var buf = new Buffer(7);
//
//console.log("准备打开已存在的文件！");
//fs.open('input.txt', 'r+', function(err, data) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("文件打开成功！");
//    console.log("准备读取文件：");
//    fs.read(data, buf, 0, buf.length, 0, function(err, bytes){
//        if (err){
//            console.log(err);
//        }
//        console.log(bytes + "  字节被读取");
//
//        // 仅输出读取的字节
//        if(bytes > 0){
//            console.log(buf.slice(0, bytes).toString());
//        }
//    });
//});
