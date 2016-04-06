'use strict';

(function () {

    angular
        .module('myTestProject')
        .factory('fileDownload.srvc', fileDownloadSrvc);

    fileDownloadSrvc.$inject = ['communication.srvc', 'constants.cnst', '$window'];

    function fileDownloadSrvc(communicationSrvc, constants, $window) {
        var service = {
            downloadFile: downloadFile
        };

        return service;

        ////////////////
		
        function downloadFile(fileName) {
            var url = constants.FILE_OPERATIONS_URL + fileName;
            var config = {
                responseType: 'blob'
            };

            communicationSrvc.getData(url, config)
                .then(function (response) {
                    var contentType = response.headers('Content-Type');
                    
                    saveFile(response.data, fileName, contentType);
                });
        }

        function saveFile(fileContent, fileName, contentType) {

            var anchor = document.createElement('a');
            var blob = new Blob([fileContent], {
                type: contentType,
                endings: 'native'
            });
            var url = window.URL.createObjectURL(blob);

            anchor.href = url;
            anchor.download = fileName;
            anchor.click();
        }

    }
})();