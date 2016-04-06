'use strict'

var userModel = require('../models/users.modl');
var uuid = require('uuid');
var tokenModel = require('../models/token.modl');
var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {

	userModel.findById(req.body.username)
		.exec(function (err, user) {
			if (err) {

				res.status(400).end('Wrong Username or Password!');

			} else if (user && req.body.password === user.password) {

				var profile = {
					first_name: user.name,
					email: user.username,
					id: user.username
				};

				var token = jwt.sign(profile, 'mySecret', { expiresIn: 1000 * 60 * 60 });

				tokenModel.saveToken(token, function(err, savedToken) {
					if(err) {
						console.log(err);
					}
				});

				res.json({
					token: token,
					username: user.username,
					name: user.name,
					files: user.files
				});
			} else {

				res.status(400).end('Wrong Username or Password!');

			}
		});
}