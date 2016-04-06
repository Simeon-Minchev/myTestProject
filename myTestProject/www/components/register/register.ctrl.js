(function() {
'use strict';

	angular
		.module('myTestProject')
		.controller('register.ctrl', registerCtrl);

	registerCtrl.$inject = ['$scope', 'login.srvc', 'message.srvc', 'redirect.srvc'];
	
	function registerCtrl($scope, loginSrvc, messageSrvc, redirectSrvc) {
		$scope.sm = {
		};
		
		angular.extend(this, {
			register: loginSrvc.register,
			message: messageSrvc.getMessage(),
			close: messageSrvc.closeMessage,
			goTo: redirectSrvc.goTo
		});
	}
})();