'use strict'

var ttl = require('mongoose-ttl');

module.exports = function (mongoose) {
	var tokenSchema = mongoose.Schema({
		_id: String
	});
	
	tokenSchema.plugin(ttl, { ttl: 1000 * 60 * 60 });
	
	return tokenSchema;
}