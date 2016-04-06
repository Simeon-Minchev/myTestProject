'use strict'

var checkToken = require('../middlewares/checkToken.mdlw');
var getUserFileInfo = require('../middlewares/getUserFileInfo.mdlw');

module.exports = function (app) {

	app.get('/api/getUserFileInfo', checkToken, getUserFileInfo);
		
}
