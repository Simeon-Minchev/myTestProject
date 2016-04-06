'use strict'

var userModel = require('../models/users.modl');
var determineSection = require('./determineSection.mdlw');

module.exports = function (req, res, next) {

    var fileName = req.params.fileName;

    userModel.findById(req.user.email, function (err, userData) {
        
        var fileInfo = userData.files;
        var section = determineSection(fileName);
        var currentSection = fileInfo[section];

        console.log(fileName);
        for (var index in currentSection) {
            console.log(currentSection[index]);
            if (currentSection[index] && currentSection[index].fileName === fileName) {
                req.fileId = currentSection[index].id;
                console.log('next');
                next();
            }
        }

        if (!req.fileId) {
            res.status(400).end('File "' + fileName + '" does not exists.');
        }
        
    });

}