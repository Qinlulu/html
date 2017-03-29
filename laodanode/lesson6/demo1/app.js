/**
 * Created by Nan on 2016/12/2.
 */
var path = require('path');
var fs = require('fs');

//输出当前目录的路径
//console.log(__dirname);

//输出一个绝对路径 from to 从哪到哪
//var resolvePath = path.resolve(__dirname, './lesson6');

//获取路径的后缀名
//var extName = path .extname('app.js');

//获取路径全称，ext 是需要截取的后缀名
//path.basename(p, [ext])
//var extName = path .basename('app.js','.js');


//path.sep windows 返回一个"/"
//var url = "e:/abc" + "/" + "etc";
//var url = 'e:\\abc' + path.sep + 'etc';

//path.dirname() 返回当前文件的路径||返回一个路径的文件名(api)
//var url = path.dirname('E:\\Teach\\NodeJs\\lesson6\\demo1\\app.js');

//将一个字符串路径 转化成标准路径
//var url = path.normalize('../foo/bar//baz/asdf/quux/');
//var url1= __dirname +'\\'+ 'app.js';
//var url2 = path.normalize(__dirname + path.sep + 'app.js');
//var url3 = path.normalize("demo/abc" + "/" + 'app.js');

//将多个参数拼接到一起，并且将拼接的字符串的结果转换为一个标准路径
//返回拼接字符串的一个标准路径
//var url = path.join('/foo', 'bar', 'baz/asdf', 'quux', '.');
//var url = path.join(__dirname, "app.js");


//获取文件信息
//fs.stat('etc', function (err, stats) {
//    if (err) return console.error(err);
//    console.log(stats.isFile());
//    console.log(stats.isDirectory());
//});


var sourceFile = 'etc';

//同步遍历
//var readdirSync = fs.readdirSync(sourceFile);
//readdirSync.forEach(function (file) {
//    var filepath = path.join(sourceFile, file);
//    fs.stat(filepath, function (err, stats) {
//        if (err) return console.error(err);
//        console.log(filepath + ' is :' + stats.isFile());
//    });
//});
fs.readdir(sourceFile, function (err, files) {

    if (err) return console.error(err);

    //遍历算法
    files.forEach(function (file) {
        var filepath = path.join(sourceFile, file);
        fs.stat(filepath, function (err, stats) {
            if (err) return console.error(err);
            if (stats.isFile()) {
                console.log(file + " isFile");
            } else {
                console.log(file + " is directory");
            }
        });
    });
    //递归遍历
    //(function getFileStats(i, length) {
    //    if (i < length) {
    //
    //        var filepath = path.join(sourceFile, files[i]);
    //        fs.stat(filepath, function (err, stats) {
    //            if (err) return console.error(err);
    //            console.log(filepath + ' is :' + stats.isFile());
    //        });
    //
    //        getFileStats(++i, length);
    //    }
    //})(0, files.length);
});

