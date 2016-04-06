'use strict'

var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
var upload = multer({ storage: storage });
var fs = require('fs');

var uploadFile = require('../middlewares/uploadFile.mdlw');
var checkToken = require('../middlewares/checkToken.mdlw');
var decodeToken = require('../middlewares/decodeToken.mdlw');
var bindFileToUser = require('../middlewares/bindFileToUser.mdlw');
var getFile = require('../middlewares/getFile.mdlw');
var deleteFile = require('../middlewares/deleteFile.mdlw');
var unbindFileToUser = require('../middlewares/unbindFileToUser.mdlw');
var getFileId = require('../middlewares/getFileId.mdlw');

module.exports = function (app) {

	app.post('/api/file', checkToken, upload.single('file'), uploadFile, decodeToken, bindFileToUser);
    
    app.get('/api/file/:fileName', checkToken, decodeToken, getFileId, getFile);
    
    app.delete('/api/file/:fileName', checkToken, decodeToken, getFileId, deleteFile, unbindFileToUser);
    
}
