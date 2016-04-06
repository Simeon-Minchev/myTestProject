'use strict';

(function() {
	angular
		.module('myTestProject')
		.factory('successInterceptor.srvc', successInterceptorSrvc);

	successInterceptorSrvc.$inject = ['$q', 'message.srvc', '$window'];
	
	function successInterceptorSrvc($q, messageSrvc, $window) {
		var service = {
			'response': response
		};
		
		return service;

		////////////////
		
		function response(response) {
			var successHeader = response.headers('Successful-Operation');
			
			if(successHeader) {
				messageSrvc.setMessage(response.data, 'success', 5000);
			}
			
			return response;
		}
	}
})();