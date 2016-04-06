'use strict';

(function () {
	angular
		.module('myTestProject')
		.factory('аuthorizationInterceptor.srvc', аuthorizationInterceptorSrvc);

	аuthorizationInterceptorSrvc.$inject = ['$q', 'message.srvc', '$window'];

	function аuthorizationInterceptorSrvc($q, messageSrvc, $window) {
		var service = {
			'request': request
		};

		return service;

		////////////////
		
		function request(config) {
			console.log(config);
			config.headers = config.headers || {};
			
			if ($window.sessionStorage.token) {
				config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
			}
			
			return config;
		}
	}
})();