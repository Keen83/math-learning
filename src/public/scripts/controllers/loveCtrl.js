/*jslint node: true */
'use strict';

var ctrlModule = angular.module('math.controllers');

ctrlModule.controller('loveCtrl', ['$scope',
	function($scope){
		$scope.name = "Julya";
}]);