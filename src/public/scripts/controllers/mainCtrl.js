/*jslint node: true */
'use strict';

var ctrlModule = angular.module('math.controllers');

ctrlModule.controller('mainCtrl', ['$scope',
	function($scope){
		$scope.name = "world";
}]);