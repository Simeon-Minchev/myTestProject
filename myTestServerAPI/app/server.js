var express = require('express');
var app = express();
var https = require('https');
var fs = require('fs');
var hskey = fs.readFileSync('./SSL/hacksparrow-key.pem');
var hscert = fs.readFileSync('./SSL/hacksparrow-cert.pem');
var options = {
    key: hskey,
    cert: hscert
};

var controllers = require('./controllers')(app, express);

https.createServer(options, app).listen(8080, function() {
  console.log('Connected to port 8080');
});
