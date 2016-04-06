'use strict'

module.exports = function (mongoose) {
	var userSchema = mongoose.Schema({
		_id: String,
		username: String,
		name: String,
		password: String,
		files: {
			documents: Array,
			images: Array,
			videos: Array,
			music: Array,
			other: Array
		}
	});
	
	return userSchema;
}