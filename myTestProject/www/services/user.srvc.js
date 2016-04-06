'use strict';

(function () {
    angular
        .module('myTestProject')
        .factory('user.srvc', userSrvc);

    userSrvc.$inject = [];

    function userSrvc() {
        var user = null;

        var service = {
            setUser: setUser,
            getUser: getUser
        };

        return service;

        ////////////////
		
        function setUser(_user) {
            user = _user;
            checkUserStatus();
        }

        function getUser() {
            return user;
        }
        
        function checkUserStatus() {
            if (!user) {
                // redirectSrvc.goTo('login');
            }
        }
    }
})();