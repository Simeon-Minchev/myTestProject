'use strict'

var userModel = require('../models/users.modl');

module.exports = function (req, res, next) {

    userModel.findById(req.user.email, function (err, userData) {
        var fileInfo = userData.files;
        
        for (var section in fileInfo) {
            var currentSection = fileInfo[section];
            
            for(var index in currentSection) {
                if (currentSection[index]) {
                    delete fileInfo[section][index].id;
                }
            }
        }
        
        res.json({
            files: fileInfo
        });

        res.end();
    });
    
}