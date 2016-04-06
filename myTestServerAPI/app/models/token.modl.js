'use strict'

var dataBase = require('../dataBase');
var ttl = require('mongoose-ttl');

exports.saveToken = function (id, callback) {
	
	var Token = createModel();
	var token = new Token({
		_id: id
	});
	
	return token.save(callback);
	
}

exports.findById = function (id) {
	
	var Token = createModel();
	return Token.findById(id).lean();
	
}

function createModel() {
	
	var mongoose = dataBase.mongooseInstance();
	var schema = dataBase.getTokenSchema();
	var Token = mongoose.model('Token', schema);
	
	return Token;
	
}