'use strict'

module.exports = function () {

	var mongoose = require('mongoose');
	var db = mongoose.connection;

	db.on('error', console.error);
	db.once('open', function () {
		console.log('connected to db');
	});

	mongoose.connect('mongodb://localhost:27017');
	
	return mongoose;
}