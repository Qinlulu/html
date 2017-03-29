/**
 * Created by Nan on 2016/12/12.
 */


var index = require('./index');
var about = require('./about');
var home = require('./home');
var user = require('./user');

module.exports = function (app) {
    app.get('/',  home);
    app.get('/about', about);
    app.get('/user', user);
};

