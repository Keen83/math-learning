/*jslint node: true */
'use strict';

var ctrlModule = angular.module('math.controllers');

ctrlModule.controller('mainCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.name = "world";
		$scope.result = 0;
		var expResult = 5;
		var maxNumber = 20;

		$(document).keypress(function(e) {
			console.log("Key code: " + e.keyCode);
			if (e.keyCode >= 48 && e.keyCode <= 57) {
				updateResult(e.keyCode);
			}
		});

		$(document).keydown(function(e) {
			console.log("Key code: " + e.keyCode);
			if (e.keyCode == 13) {
				checkValue();
			}
			if (e.keyCode == 8) {
				removeLastChar();
			}

		});

		function removeLastChar() {
			$scope.$apply(function() {
				$scope.result = $scope.result.slice(0, -1);
				$scope.res_nums = $scope.result.toString();
			});
		}

		function updateResult(keyCode) {
			var keyValue = String.fromCharCode(keyCode);
			console.log("Key value: " + keyValue);

			if (keyValue < '0' && keyValue > '9' ) {
				return;
			}

			if ($scope.result.length >= 3){
				return;
			}

			$scope.$apply(function() {
				$scope.result += keyValue;
				$scope.res_nums = $scope.result.toString();
			});
		}

		function checkValue() {
			var result = parseInt($scope.result, 10);
			if (result == expResult) {
				showCorrect();
			} else {
				showError();
			}
			initAddExpr();
		}

		function showCorrect() {
			console.log("Result: OK");
			$scope.positive = true;
			$scope.hasResult = true;
		}

		function showError() {
			console.log("Result: Error");
			$scope.positive = false;
			$scope.hasResult = true;
		}

		function initAddExpr() {
			expResult = getRandomInt(0, maxNumber);
			console.log("Expected result: " + expResult);

			var x1 = getRandomInt(0, expResult);
			var x2 = expResult - x1;

			$scope.$apply(setValues(x1, x2, "", "plus"));
		}

		function setValues(x1, x2, result, sign) {
			$scope.x1 = x1;
			$scope.x1_nums = x1.toString();
			$scope.x2 = x2;
			$scope.x2_nums = x2.toString();
			$scope.result = result;
			$scope.res_nums = result.toString();
			$scope.sign = sign;
		}

		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		initAddExpr();
		$http.post('/log', {msg: "Math requested"});
	}
]);