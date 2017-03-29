/**
 * Created by Nan on 2016/12/14.
 */

var index = require('./home');
var userlogin_jsonp = require('./login');
var userlogin = require('./userlogin');

module.exports = function (app) {
    app.get('/', index);
    app.post('/userlogin', userlogin);
    app.get('/userlogin', userlogin_jsonp);
};