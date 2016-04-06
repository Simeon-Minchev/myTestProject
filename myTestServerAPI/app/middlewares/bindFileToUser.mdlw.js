'use strict'

var userModel = require('../models/users.modl');
var jwt = require('jsonwebtoken');
var determineSection = require('./determineSection.mdlw');

module.exports = function (req, res, next) {

    var fileName = req.file.filename;

    userModel.findById(req.user.email, function (err, userData) {
        var section = determineSection(fileName);
        var fileNames = userData.files[section];
        var fileId = req.fileId;
        var fileExists = false;

        for (var index in fileNames) {
            if (fileNames[index].fileName && fileNames[index].fileName === fileName) {
                fileExists = true;
            }
            
            break;
        }

        if (!fileExists) {
            userData.files[section].push({
                fileName: fileName,
                id: fileId
            });
            userData.save();
            res.setHeader('Successful-Operation', 'true');
            res.end('File ' + fileName + ' was successfully saved under the ' + section + ' section.');
        } else {
            res.status(400).end('File with name ' + fileName + ' already exists under the ' + section + ' section.');
        }
    });
}
