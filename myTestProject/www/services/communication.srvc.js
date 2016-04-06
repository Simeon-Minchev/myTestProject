(function () {
	'use strict';

	angular
		.module('myTestProject')
		.factory('communication.srvc', communicationSrvc);

	communicationSrvc.$inject = ['$http'];
	function communicationSrvc($http) {
		var service = {
			postData: postData,
			getData: getData,
            deleteData: deleteData
		};

		return service;

		////////////////
		
		function postData(url, data, headers) {
			return $http.post(url, data, headers);
		}
		
		function getData(url, config) {
			return $http.get(url, config);
		}
        
        function deleteData(url) {
            return $http.delete(url);
        }
	}
})();