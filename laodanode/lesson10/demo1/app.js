/**
 * Created by haonan on 2016/12/7.
 */

//同步方法：
var syncThrowError = function () {
    throw new Error('syncThrowError error');
};

//异步方法：
var asncThrowError = setTimeout(function () {
    var err = 'asyncThrowError error';
    throw new Error('syncThrowError error');
});

try {
    syncThrowError();
    asncThrowError();
} catch (e) {
    //console.log(e);
}

process.on('uncaughtException', function (err) {
    console.log(err);
});


