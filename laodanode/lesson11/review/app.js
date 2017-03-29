/**
 * Created by haonan on 2016/12/8.
 */
//var http = require('http');
//var url = require('url');
//
//http.createServer(function (req, res) {
//    //req.url 输出请求地址以及传参
//    console.log(url.parse(req.url).query);
//    res.end('server');
//}).listen(8080, function () {
//    console.log('8080');
//});

//console.log(__dirname);
//console.log(process.cwd());

//process.exit();
//process.on('exit',function(){
//    console.log();
//});

//process.stdout.write('123');
//process.stderr.write('123');

//process.stdin.on('data',function(data){
//    console.log(data.toString());
//    process.stdin.emit('end');
//});
//process.stdin.on('end', function () {
//    console.log('stdin finished');
//});


console.log(process.argv.slice(2));