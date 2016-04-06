'use strict';

(function () {

	angular
		.module('myTestProject')
		.factory('message.srvc', messageSrvc);

	messageSrvc.$inject = ['$timeout'];
	function messageSrvc($timeout) {
		var message = {
			text: '',
			type: '',
			delay: 0,
			show: false
		}
		
		var service = {
			setMessage: setMessage,
			getMessage: getMessage,
			closeMessage: closeMessage
		};

		return service;

		////////////////
		
		function setMessage(text, type, delay) {
			message.text = text;
			message.type = type;
			message.delay = delay;
			message.show = true;
		}
		
		function closeMessage() {
			message.text = '';
			message.type = '';
			message.delay = 0;
			message.show = false;
		}
		
		function getMessage() {
			return message;
		}
	}
})();