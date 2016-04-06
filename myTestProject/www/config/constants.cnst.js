(function () {
	'use strict';

	angular
		.module('myTestProject')
		.constant('constants.cnst', environmentConstants());

	function environmentConstants() {
		var BASE_URL = 'https://9.156.6.57';
		var PORT = '8080';
		
		return {
			LOGIN_URL: BASE_URL + ':' + PORT + '/login',
			REGISTER_URL: BASE_URL + ':' + PORT + '/register',
			FILE_UPLOAD_URL: BASE_URL + ':' + PORT + '/api/file',
			GET_USER_FILE_INFO: BASE_URL + ':' + PORT + '/api/getUserFileInfo',
			FILE_OPERATIONS_URL: BASE_URL + ':' + PORT + '/api/file/'
		};
	}
})();