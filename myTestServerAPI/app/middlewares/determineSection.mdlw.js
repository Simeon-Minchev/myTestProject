'use strict'

var constants = require('../config/constants.cnst');

module.exports = function (fileName) {
    var typesArray = constants.FILE_TYPES;
    var section = '';
    var extension = '';

    for (var i = fileName.length; i >= 0; i--) {
        if (fileName[i] === '.') {
            extension = fileName.slice(i + 1);
            break;
        }
    }

    for (var index in typesArray) {
        var typeArray = typesArray[index];

        if (typeArray.array.indexOf(extension) !== -1) {
            section = typeArray.section;
        }
    }

    if (!section) {
        section = 'other'
    }

    return section;
}