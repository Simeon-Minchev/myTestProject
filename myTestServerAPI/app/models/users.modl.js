'use strict'

var dataBase = require('../dataBase');

exports.saveUser = function (reqBody, callback) {
	
	var User = createModel();
	var user = new User({
		_id: reqBody.email,
		username: reqBody.email,
		password: reqBody.password,
		name: reqBody.name,
		files: {
			documents: [],
			images: [],
			videos: [],
			music: [],
			other: []
		}
	});

	return user.save(callback);
	
}

exports.findById = function (id, callback) {
	
	var User = createModel();
	return User.findById(id, callback);
	
}

function createModel() {
	
	var mongoose = dataBase.mongooseInstance();
	var schema = dataBase.getUsersSchema();
	var User = mongoose.model('User', schema);
	
	return User;
	
}