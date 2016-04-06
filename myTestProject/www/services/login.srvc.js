'use strict';

(function () {
	angular
		.module('myTestProject')
		.factory('login.srvc', loginSrvc);

	loginSrvc.$inject = ['constants.cnst', 'communication.srvc', 'user.class', 'user.srvc', 'message.srvc', 'redirect.srvc', '$window'];
	function loginSrvc(constants, communicationSrvc, User, userSrvc, messageSrvc, redirectSrvc, $window) {
		var isLoggedIn = false;

		var service = {
			authenticate: authenticate,
			register: register,
			getIsLoggedIn: getIsLoggedIn,

		};

		return service;
		
		////////////////

		function authenticate(username, password) {
			var url = constants.LOGIN_URL;
			var body = {
				username: username,
				password: password
			};

			communicationSrvc.postData(url, body, {})
				.then(function (response) {
					console.log(response);
					if (response && response.status === 200) {
						var user;

						$window.sessionStorage.token = response.data.token;
						
						console.log(response.data);

						isLoggedIn = true;
						user = new User(response.data.username, response.data.name, response.data.files);
						userSrvc.setUser(user);
						redirectSrvc.goTo('main');
					}
				});
		}

		function register(email, password, name) {
			var url = constants.REGISTER_URL;
			var body = {
				email: email,
				password: password,
				name: name
			};

			communicationSrvc.postData(url, body)
				.then(function (response) {
					console.log(response);
					if (response && response.status === 200) {
						redirectSrvc.goTo('login');
					}
				});
		}

		function getIsLoggedIn() {
			return isLoggedIn;
		}
	}
})();