/**
 * Created by haonan on 2016/12/8.
 */
//����domainģ��
var domain = require('domain');
var fs = require('fs');

var oDomain = domain.create();

//����һ��
//function readSomeFile() {
//    fs.readFile('./app.js', function (err, data) {
//        if (err) return console.error(err);
//        console.log(JSON.parse(data));
//    });
//}
//oDomain.run(readSomeFile);
//oDomain.on('error', function (err) {
//    console.log(err);
//});

//��������
function readSomeFile(pathname,callback) {
    fs.readFile(pathname,oDomain.bind(function(err,data){
        return callback(err,data);
    }));
}
readSomeFile('./app.js',function(err,data){
    if (err) return console.error(err);
    //console.log(JSON.parse(data));
    console.log(data);
});
oDomain.on('error', function (err) {
    console.log(err);
});