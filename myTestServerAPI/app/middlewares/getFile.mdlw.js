'use strict'

var fs = require('fs');
var fileModel = require('../models/files.modl');

module.exports = function (req, res, next) {
    var fileName = req.params.fileName;
    var fileId = req.fileId;
    var path = 'downloads/' + fileName;

    fileModel.getFile(fileId, path, function () {
      
        res.download(path, fileName);
        
    });

}