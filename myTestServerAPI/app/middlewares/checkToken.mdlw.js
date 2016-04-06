'use strict'

var tokenModel = require('../models/token.modl');

module.exports = function (req, res, next) {
    var token = req.headers.authorization.replace('Bearer ', '');

    tokenModel.findById(token)
        .exec(function (err, token) {
            if (err) {
                console.log(err);
                res.status(400).end('Whoopsie... Something went wrong. Please try again.');
            } else if (token) {
                next();
            } else {
                res.status(401).end('Session timed out! Please login again.');
            }
        });
}