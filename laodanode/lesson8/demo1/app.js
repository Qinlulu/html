var http = require('http');
var zlib = require('zlib');
var fs = require('fs');


//创建一个新的 Gzip 对象
//var gZip = zlib.createGzip();
////创建一个读取流
//var readStream = fs.createReadStream('./readme.md');
////创建一个写入的流
//var writeStream = fs.createWriteStream('./readme.md.gz');
////通过pipe()将数据压缩并导入到 待写入的流中
//readStream.pipe(gZip).pipe(writeStream);
//
////读取压缩文件
//fs.readFile('./readme.md.gz',function(err,data){
//    if(err) return console.error(err);
//    //用zlib的 gunzip() 解压读取出的buffer
//    zlib.gunzip(data,function(err,data){
//        console.log(data.toString().trim());
//    });
//});

//
var input = '123213213213dsfdsjalkfjds';
zlib.deflate(input, function(err, buffer) {
    if (!err) {
        console.log(buffer.toString('base64'));
        zlib.inflate(buffer,function(err,buf){
            console.log(buf.toString('utf8'));
        });
    }
});
