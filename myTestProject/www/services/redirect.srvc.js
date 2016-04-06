'use strict';

(function() {
	angular
		.module('myTestProject')
		.factory('redirect.srvc', redirectSrvc);

	redirectSrvc.$inject = ['$state'];
	
	function redirectSrvc($state) {
		var service = {
			goTo: goTo
		};
		
		return service;

		////////////////
		
		function goTo(location) { 
			$state.go(location);
		}
	}
})();