'use strict';

(function () {

    angular
        .module('myTestProject')
        .factory('fileDelete.srvc', fileDeleteSrvc);

    fileDeleteSrvc.$inject = ['communication.srvc', 'constants.cnst', 'user.srvc'];

    function fileDeleteSrvc(communicationSrvc, constants, userSrvc) {
        var service = {
            deleteFile: deleteFile
        };

        return service;

        ////////////////
        
        function deleteFile(fileName) {
            var url = constants.FILE_OPERATIONS_URL + fileName;

            communicationSrvc.deleteData(url)
                .then(function (response) {
                    if (response.status === 200) {
                        updateUserFileInfo();
                    }
                });
        }

        function updateUserFileInfo() {
            var url = constants.GET_USER_FILE_INFO;

            communicationSrvc.getData(url)
                .then(function (response) {
                    var files = response.data.files;
                    var user = userSrvc.getUser();

                    user.setFiles(files);
                });
        }
    }
})();