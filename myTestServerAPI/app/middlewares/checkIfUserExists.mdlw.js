'use strict'

var userModel = require('../models/users.modl');

module.exports = function (req, res, next) {
	userModel.findById(req.body.email)
		.exec(function (err, user) {
			if (err) {
				console.log('Check if user exists error:', err);
				res.status(400).end('Whoopsie... Something went wrong. Please try again /check if exists/.');
			} else if (user) {
				res.status(400).end('Username alredy exists! Please use another user /check if exists/.');
			} else {
				next();
			}
		});
}