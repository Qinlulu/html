/**
 * Created by Nan on 2016/12/14.
 */

var home = require('./home');
var userlogin = require('./userlogin');
var userlogin_jsonp = require('./userlogin_jsonp');


module.exports = function (app) {
    app.get('/', home);
    app.post('/userlogin', userlogin);
    app.get('/userlogin', userlogin_jsonp);
    //app.get('/login', function (req, res) {
    //    var data = {
    //        name: 'haonan',
    //        password: '123'
    //    };
    //    res.json(JSON.stringify(data));
    //})
};