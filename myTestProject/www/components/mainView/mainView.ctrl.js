'use strict';

(function() {
	angular
		.module('myTestProject')
		.controller('mainView.ctrl', mainViewCtrl);

	mainViewCtrl.$inject = ['$scope', 'user.srvc', 'sideMenu.srvc', 'fileUpload.srvc', 'message.srvc', 'fileDownload.srvc', 'fileDelete.srvc'];
	
	function mainViewCtrl($scope, userSrvc, sideMenuSrvc, fileUploadSrvc, messageSrvc, fileDownloadSrvc, fileDeleteSrvc) {
		$scope.sm = {
			toggleLeft: sideMenuSrvc.toggleLeft,
			selected: ''
		};
		
		angular.extend(this, {
			user: userSrvc.getUser(),
			uploadFile: fileUploadSrvc.uploadFile,
			message: messageSrvc.getMessage(),
			close: messageSrvc.closeMessage,
			downloadFile: fileDownloadSrvc.downloadFile,
            deleteFile: fileDeleteSrvc.deleteFile
		});

		////////////////
		
	}
})();