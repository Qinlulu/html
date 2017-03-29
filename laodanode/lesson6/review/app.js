/**
 * Created by Nan on 2016/12/2.
 */
var fs = require('fs');

//fs.readFile('dizhi.txt', encoding = 'utf8', function (err, data) {
//    if (err) return console.error(err);
//
//    fs.writeFile('etc/dizhi_copy.txt', data, encoding = 'utf8', function (err) {
//        if (err) return console.error(err);
//        console.log('write done');
//    })
//});

//var sourceFile = 'dizhi.txt';
//var targetFile = 'dizhi_copy.txt';
//var opts = {encoding: 'utf8'};
//
//var readStream = fs.createReadStream(sourceFile, opts);
//var writeStream = fs.createWriteStream(targetFile, opts);
//readStream.pipe(writeStream);

var pathname = 'etc';
var dirExist = function (path) {
    fs.exists(path, function (flag) {
        if (flag) return console.log('this dir is already exists');
        dirMake(path);
    });
};

var dirMake = function (path) {
    fs.mkdir(path, function (err) {
        if (err) return console.error(err);
        console.log('make dir finished!');
    });
};
dirExist(pathname);
