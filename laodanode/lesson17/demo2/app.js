var fs = require('fs'),
    path = require('path'),
    http = require('http');
var MIME = {
    '.css': 'text/css',
    '.js': 'text/javascript'
};

function main() {

    http.createServer(function (req, res) {

        var root = './';
        var url = req.url;
        var urlInfo = parseUrl(root, url);
        validateFile(urlInfo.pathname, function (err, pathname) {
            if (err) {
                res.writeHead(404, {
                    'Content-Type': 'text/html'
                });
                res.end(err);
            } else {
                res.writeHead(200, {
                    'Content-Type': urlInfo.mime
                });
                outputFile(pathname, res);
            }
        });
    }).listen(8080, function () {
        console.log('listen 8080');
    });
}
function outputFile(pathname, response) {
    (function readFiles(i, length) {
        if (i < length) {
            var readStream = fs.createReadStream(pathname[i]);
            readStream.pipe(response, {end: false});
            readStream.on('end', function () {
                readFiles(++i, length);
            });
        } else {
            response.end();
        }
    })(0, pathname.length)
}
function validateFile(pathname, callback) {
    (function next(i, length) {
        if (i < length) {
            fs.stat(pathname[i], function (err, stats) {
                if (err) {
                    callback(err);
                } else if (!stats.isFile()) {
                    callback('Error: is not file')
                } else {
                    next(++i, length);
                }
            });
        } else {
            callback(null, pathname);
        }
    })(0, pathname.length);
}
function parseUrl(root, url) {
    if (url.indexOf('??') == -1) {
        url = url.replace('/', '/??');
    }
    var parts = url.split('??');
    var baseRoot = parts[0];
    pathnames = parts[1].split(',').map(function (value) {
        return path.join(root, baseRoot, value);
    });
    return {
        mime: MIME[path.extname(pathnames[0])] || "text/plain",
        pathname: pathnames
    }
}
main();