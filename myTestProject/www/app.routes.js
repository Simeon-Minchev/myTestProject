'use strict';

(function () {
	angular
		.module('myTestProject')
		.config(Router);

	Router.$inject = ['$stateProvider', '$urlRouterProvider']

	function Router($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('main', {
				url: '/mainView',
				templateUrl: 'components/mainView/mainView.tmpl.html',
				controller: 'mainView.ctrl',
				controllerAs: 'vm'
			})
			.state('login', {
				url: '/login',
				templateUrl: 'components/login/login.tmpl.html',
				controller: 'login.ctrl',
				controllerAs: 'vm'
			})
			.state('register', {
				url: '/register',
				templateUrl: 'components/register/register.tmpl.html',
				controller: 'register.ctrl',
				controllerAs: 'vm'
			});

		$urlRouterProvider.otherwise('/login');
	}
})()