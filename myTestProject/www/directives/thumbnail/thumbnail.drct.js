'use strict';

(function() {
	angular
		.module('myTestProject')
		.directive('thumbnail', thumbnail);

	thumbnail.$inject = [];

	function thumbnail() {
		return {
			restrict: "E",
			scope: {
				file: "=",
				ionClass: "=",
				download: "&",
                delete: "&"
			},
			link: link,
			templateUrl: 'directives/thumbnail/thumbnail.tmpl.html'
		};

		function link(scope, element, attrs) {
			scope.selected = false;
			scope.toogleClass = function() {
				scope.selected = !scope.selected;
			}
		};
	}
})();