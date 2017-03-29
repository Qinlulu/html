/**
 * Created by Nan on 2016/12/1.
 */
//file system 文件系统
var fs = require('fs');

//判断路径存在状态
//fs.exists(path, [callback])  callback 返回一个布尔值
//fs.existsSync (path) 返回一个布尔值

//fs.exists('etc/img', function (exists) {
//    console.log('current dir has etc:' + exists);
//});

//new Buffer() 创建一个二进制数据流
//toString() 可以将一个Buffter类型的数据转换字符串
//var str = '你好';
//var buf = new Buffer(str);
//console.log(buf.toString());

//fs.readFile(filename, [encoding], [callback])
// filename string字符串
//encoding 编码格式
//console.log(fs);


//异步读取文件内容
//fs.readFile('etc/readme.txt', function (err, data) {
//    if (err) return console.error(err);
//    console.log('read file finished,data:' + data);
//});

//同步读取文件内容
//var data = fs.readFileSync('etc/readme.txt');
//console.log(data.toString());

//异步写入文件内容
//fs.writeFile(filename, data, [encoding], [callback])
//filename 写入的文件名
// data 写入的数据
//encoding 编码格式

var sourceFile = 'etc/readme.txt';
var targetFile = 'etc/readme_copy.txt';

//方法一：
//fs.readFile(sourceFile, function (err, data) {
//    if (err) return console.error(err);
//    console.log('read file finished,data:' + data);
//    fs.writeFile(targetFile, data, encoding = 'utf8', function (err) {
//        if (err) return console.error(err);
//        console.log('write done');
//    });
//});


//方法二：
//var readFile = function (filepath) {
//    fs.readFile(filepath, function (err, data) {
//        if (err) return console.error(err);
//        console.log('read file finished,data:' + data);
//        writeFile(targetFile, data);
//    });
//};
//var writeFile = function (filepath, data) {
//    fs.writeFile(filepath, data, encoding = 'utf8', function (err) {
//        if (err) return console.error(err);
//        console.log('write done');
//    });
//};
//readFile(sourceFile);

//方法三：

// 创建一个读取流 返回一个新的 读取流对象（readStream object）
//fs.createReadStream(path, [options])
// 创建一个写入流 返回一个新的 写入流对象（WriteStream  object）
//fs.createReadStream(path, [options])


var readStream = fs.createReadStream(sourceFile,{encoding:'utf8'});
var writeStream = fs.createWriteStream(targetFile,{encoding:'utf8'});
//通过一个管子，pipe()来将读取的数据导入 需写入的流中
readStream.pipe(writeStream);