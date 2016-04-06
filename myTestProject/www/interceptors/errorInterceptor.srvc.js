'use strict';

(function () {
    angular
        .module('myTestProject')
        .factory('errorInterceptor.srvc', errorInterceptorSrvc);

    errorInterceptorSrvc.$inject = ['$q', 'message.srvc', 'user.srvc'];

    function errorInterceptorSrvc($q, messageSrvc, userSrvc) {
        var service = {
            'responseError': responseError
        };

        return service;

        ////////////////
		
        function responseError(response) {
            if (response && response.data) {
                messageSrvc.setMessage(response.data, 'danger', 5000);
            }
            
            if (response.status === 401) {
                userSrvc.setUser(null);
            }

            return response;
        }
    }
})();