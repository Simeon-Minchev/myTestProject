'use strict';

(function () {

	angular
		.module('myTestProject')
		.factory('sideMenu.srvc', sideMenuSrvc);

	sideMenuSrvc.$inject = ['$ionicSideMenuDelegate'];
	function sideMenuSrvc($ionicSideMenuDelegate) {
		var service = {
			toggleLeft: toggleLeft
		};

		return service;

		////////////////
		
		function toggleLeft() {
			$ionicSideMenuDelegate.toggleLeft();
		}
	}
})();