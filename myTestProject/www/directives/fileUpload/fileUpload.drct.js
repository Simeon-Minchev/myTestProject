(function () {
	'use strict';

	angular
		.module('myTestProject')
		.directive('fileUpload', fileUpload);

	fileUpload.$inject = [];

	function fileUpload() {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			link: link,
			restrict: 'A',
			scope: {
				returnFile: "&fileUpload"
			}
		};
		
		return directive;

		function link(scope, element, attrs) {
			element.on('click', function () {
				var inputElement = angular.element('<input>');
				var evt = getClickEvent();

				inputElement.attr('type', 'file');
				inputElement.attr('name', 'file');
				
				inputElement.on('change', function () {
					var file = inputElement[0].files[0];
					var fd = new FormData();
					console.log(file);

					fd.append('file', file, file.name);
					scope.returnFile({ file: fd });
				});

				inputElement[0].dispatchEvent(evt);
			})
		}

		function getClickEvent() {
			var evt = new MouseEvent("click", {
				view: window,
				bubbles: true,
				cancelable: true,
				clientX: 20
			});

			return evt;
		}
	}
})();
