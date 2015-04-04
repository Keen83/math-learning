/*jslint node: true */
'use strict';

var module = angular.module('math', [
	'ngRoute',
	'math.controllers',
	'math.directives'
]);

module.config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.html5Mode(true);
	}]);

module.run(['$location', '$rootScope',
	function($location, $rootScope) {
		$rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
			$rootScope.title = current.$$route.title;
		});
	}
]);