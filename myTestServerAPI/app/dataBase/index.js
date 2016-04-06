'use strict'

var mongoose = require('./initConnection.db')();
var userSchema = require('./usersSchema.db')(mongoose);
var tokenSchema = require('./tokenSchema.db')(mongoose)

exports.getUsersSchema = function () {
	return userSchema;
};

exports.mongooseInstance = function () {
	return mongoose;
};

exports.getTokenSchema = function () {
	return tokenSchema;
};
