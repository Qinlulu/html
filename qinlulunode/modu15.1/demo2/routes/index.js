/**
 * Created by Nan on 2016/12/13.
 */
var login = require('./login');
var userlogin = require('./userlogin');

module.exports = function (app) {
    app.get('/login', login);
    app.post('/userlogin', userlogin);
};