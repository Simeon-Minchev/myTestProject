'use strict';

(function () {

	angular
		.module('myTestProject')
		.factory('fileUpload.srvc', fileUploadSrvc);

	fileUploadSrvc.$inject = ['communication.srvc', 'constants.cnst', 'user.srvc'];

	function fileUploadSrvc(communicationSrvc, constants, userSrvc) {
		var service = {
			uploadFile: uploadFile
		};

		return service;

		////////////////
		
		function uploadFile(fd) {
			var url = constants.FILE_UPLOAD_URL;
			var headers = {
				transformRequest: angular.identity,
				headers: {
					'Content-Type': undefined
				}
			};

			communicationSrvc.postData(url, fd, headers)
				.then(function (response) {
					if (response.status === 200) {
						updateUserFileInfo();
					}
				});
        };

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