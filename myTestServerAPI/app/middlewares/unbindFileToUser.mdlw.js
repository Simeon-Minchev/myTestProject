'use strict'

var userModel = require('../models/users.modl');
var jwt = require('jsonwebtoken');
var determineSection = require('./determineSection.mdlw');

module.exports = function (req, res, next) {

    var fileName = req.params.fileName;

    userModel.findById(req.user.email, function (err, userData) {
        var section = determineSection(fileName);
        var fileNames = userData.files[section];
        var indexOfFile;
        var fileExists = false;

        for (var index in fileNames) {
            if (fileNames[index].fileName && fileNames[index].fileName === fileName) {
                fileExists = true;
                indexOfFile = index;
                
                break;
            }
        }

        if (fileExists) {
            userData.files[section].splice(indexOfFile, 1);
            userData.save();
            res.setHeader('Successful-Operation', 'true');
            res.end('File ' + fileName + ' was successfully deleted.');
        } else {
            res.status(400).end('File with name ' + fileName + ' does not exists under the ' + section + ' section.');
        }
    });
}
