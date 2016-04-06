'use strict';
	
(function() {
	angular
		.module('myTestProject')
		.config(configApp);
	
	configApp.$inject = ['$httpProvider'];
	
	function configApp($httpProvider) {
		 $httpProvider.interceptors.push('errorInterceptor.srvc');
		 $httpProvider.interceptors.push('successInterceptor.srvc');
		 $httpProvider.interceptors.push('аuthorizationInterceptor.srvc');
	}
})();