'use strict';

(function () {
	angular
		.module('myTestProject')
		.controller('login.ctrl', loginCtrl);
		
	loginCtrl.$inject = ['$scope', 'login.srvc', 'message.srvc'];
	
	function loginCtrl($scope, loginSrvc, messageSrvc) {
		$scope.sm = {
		};
		
		angular.extend(this, {
			login: loginSrvc.authenticate,
			message: messageSrvc.getMessage(),
			close: messageSrvc.closeMessage
		});

		////////////////
	}
})()