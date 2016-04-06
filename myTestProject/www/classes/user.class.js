'use strict';

(function() {
	angular
		.module('myTestProject')
		.factory('user.class', user);

	user.$inject = [];

	function user() {
		var self = this;

		function User(email, name, files) {
			self.email = email;
			self.name = name;
			self.files = files;
			
			return self;
		}

		this.setEmail = function(email) {
			self.email = email;
		};

		this.getEmail = function() {
			return self.email;
		};

		this.setName = function(name) {
			self.name = name;
		};

		this.getName = function() {
			return self.name;
		};
		
		this.setFiles = function(files) {
			self.files = files;
		};

		this.getFiles = function() {
			return self.files;
		};
		
		return User;
	}

})();