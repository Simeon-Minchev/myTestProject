'use strict'

var fileModel = require('../models/files.modl');

module.exports = function (req, res, next) {
    var fileId = req.fileId;

    fileModel.deleteFile(fileId, function (err) {

        if (err) {
            res.status(400).end('Something went wrong! Delete was unsuccessful.');
        } else {
            next();
        }

    });
}