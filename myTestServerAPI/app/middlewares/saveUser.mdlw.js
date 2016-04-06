'use strict'

var userModel = require('../models/users.modl');

module.exports = function (req, res, next) {
	userModel.saveUser(req.body, function (err, user) {
		if (err) {
			console.log('Save user error: ' + err);
			res.status(400).end('Whoopsie... Something went wrong. Please try again /save user/.');
		}
		res.end();

	});
}