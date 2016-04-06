'use strict'

var fs = require('fs');
var fileModel = require('../models/files.modl')

module.exports = function (req, res, next) {
	fileModel.saveFile(req.file, function (fileInfo) {
		if (fileInfo) {
            req.fileId = fileInfo._id;
			next();
		} else {
			res.status(400).end('Whoopsie... Something went wrong with the data base. Please try again.');
		}
	});
}