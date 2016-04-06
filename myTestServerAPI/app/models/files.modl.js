'use strict'

var fs = require('fs');
var dataBase = require('../dataBase');
var connection = dataBase.mongooseInstance().connection
var Grid = require('gridfs-stream');
Grid.mongo = dataBase.mongooseInstance().mongo;

exports.saveFile = function (file, callback) {

    var gfs = Grid(connection.db);

    var writestream = gfs.createWriteStream({
        filename: file.filename
    });
    fs.createReadStream(file.path).pipe(writestream);

    writestream.on('close', function (fileInfo) {
        console.log(fileInfo.filename + 'Written To DB');
        callback(fileInfo);
    });
}

exports.getFile = function (fileId, path, callback) {

    var gfs = Grid(connection.db);
	
    var fs_write_stream = fs.createWriteStream(path);
 
    var readstream = gfs.createReadStream({
        _id: fileId
    });
    readstream.pipe(fs_write_stream);

    fs_write_stream.on('close', function () {
        console.log('file has been written fully!');
        callback();
    });
}

exports.deleteFile = function (fileId, callback) {

    var gfs = Grid(connection.db);

    gfs.remove({
        _id: fileId
    }, function (err) {
        if (err) {
            callback(err);
        } else {
            callback();
        }
    });

}
