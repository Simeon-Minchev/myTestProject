'use strict';

(function () {
	angular
		.module('myTestProject', ['ionic', 'ui.bootstrap', 'angular-loading-bar', 'ngAnimate'])
		.run(onAppStart);

	onAppStart.$inject = ['$state', '$rootScope', 'login.srvc'];
	
	function onAppStart($state, $rootScope, loginSrvc) {
		$state.go('login');
		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
			if (!loginSrvc.getIsLoggedIn() && toState.name !== 'login' && toState.name !== 'register') {
				event.preventDefault();
				$state.go('login');
			}
		});
	}
})();