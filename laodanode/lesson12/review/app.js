/**
 * Created by haonan on 2016/12/9.
 */
var domain = require('domain');
var fs = require('fs');

var oDomain = domain.create();

var readFiles = function (filename, callback) {
    fs.readFile(filename, oDomain.bind(function (err, data) {
        return callback(err, data);
    }));
};

readFiles('./a.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
    a();
});

oDomain.on('error', function (err) {
    console.log(err);
});
