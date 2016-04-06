'use strict'

var authenticate = require('../middlewares/authenticate.mdlw');
var checkIfUserExists = require('../middlewares/checkIfUserExists.mdlw');
var userModel = require('../models/users.modl');
var saveUser = require('../middlewares/saveUser.mdlw');

module.exports = function (app) {

	app.post('/login', authenticate);
		
	app.post('/register', checkIfUserExists, saveUser);
	
}
