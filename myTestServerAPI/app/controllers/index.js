'use strict'

var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');

module.exports = function (app, express) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());

    app.use('/api', expressJwt({ secret: 'mySecret' }));

    app.use(require('connect-livereload')({ ignore: ['doc', 'docx', 'txt', 'rtf', 'pdf', 'odt', 'wpd', 'xls', 'xlsx', 'ods', 'csv'] }));
    
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Successful-Operation");
        res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE");
        res.header("Access-Control-Allow-Credentials", true);
        res.header("Access-Control-Expose-Headers", "Successful-Operation");
        next();
    });

    var loginController = require('./login.ctrl')(app);
    var fileController = require('./file.ctrl')(app);
    var userController = require('./user.ctrl')(app)

};
