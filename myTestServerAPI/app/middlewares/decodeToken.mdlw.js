'use strict'

var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {

	var token = req.headers.authorization.replace('Bearer ', '');
	var user = jwt.decode(token);
    
    console.log(user);
	
	req.user = user;
	
	next();
}
