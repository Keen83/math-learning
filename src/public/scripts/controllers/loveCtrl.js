/*jslint node: true */
'use strict';

var ctrlModule = angular.module('math.controllers');

ctrlModule.controller('loveCtrl', ['$scope', '$http',
	function($scope, $http){
		$scope.name = "Julya";

		$http.post('/log', {msg: "Love requested"});
}]);