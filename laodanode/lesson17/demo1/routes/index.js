/**
 * Created by Nan on 2016/12/16.
 */

var login = require('./login');
module.exports = function (app) {
    app.get('/', function () {

    });
    app.get('/login', login);
    app.post('/loginInterface', function (req, res) {
        var username = req.body.username;
        var password = req.body.password;
        var data;
        if (username == "qinlulu" && password == "123123") {
            data = {
                code: 0,
                errMsg: "",
                data: {
                    name: "qinlulu",
                    age: 50,
                    hobby: 'eat woman'
                }
            };
            res.json(data);
        } else {
            //data = {
            //    code: 1,
            //    errMsg: "error"
            //};
            //res.json(data);
            req.flash('error', '你错了');
            res.redirect('/login');
        }

    });
};