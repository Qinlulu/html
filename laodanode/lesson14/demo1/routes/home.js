/**
 * Created by Nan on 2016/12/12.
 */
module.exports = function (req, res) {
    //res.send('index page');
    console.log(req.body.name);
    console.log(req.query);
    res.render('index', {title: 'index page'});
};