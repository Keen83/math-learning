/*jslint node: true */
'use strict';

var ctrlModule = angular.module('math.controllers');

ctrlModule.controller('mainCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.name = "world";
		$scope.result = 0;
		var expResult = 5;
		var maxNumber = 999;
		var emptyChar = 'b';

		$scope.btnsList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'e', 'r'];

		$(document).keypress(function(e) {
			console.log("Key code: " + e.keyCode);
			if (e.keyCode >= 48 && e.keyCode <= 57) {
				var keyValue = String.fromCharCode(e.keyCode);
				
				processKey(keyValue);
			}
		});

		$(document).keydown(function(e) {
			console.log("Key code: " + e.keyCode);
			if (e.keyCode == 13) {
				checkValue();
			}
			else if (e.keyCode == 8) {
				$scope.$apply(removeLastChar);
			}
			else if (e.key) {
				processKey(e.key);
			}
		});

		function processKey(keyValue) {
			console.log("Key value: " + keyValue);

			if (isKeyValueCorrect(keyValue)) {
				$scope.$apply(updateResult(keyValue));
			}
		}

		$scope.onNumberEntered = function(number) {
			if (number == 'e') {
				checkValue();
				return;
			}
			if (number == 'r') {
				removeLastChar();
				return;
			}
			updateResult(number);
		};

		function getMaxLength() {
			return maxNumber.toString.length;
		}

		function removeLastChar() {
			$scope.result = $scope.result.slice(0, -1);
			$scope.res_nums = getResultString();
		}

		function updateResult(keyValue) {
			$scope.result += keyValue;
			$scope.res_nums = getResultString();
		}

		function isKeyValueCorrect(keyValue) {
			if (keyValue < '0' && keyValue > '9') {
				return false;
			}

			if ($scope.result.length >= expResult.toString().length) {
				return false;
			}

			return true;
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
			$scope.res_nums = getResultString();
			$scope.sign = sign;
		}

		function getResultString() {
			var res = $scope.result.toString();
			var expLength = expResult.toString().length;
			while (res.length < expLength) {
				res += emptyChar;
			}
			return res;
		}

		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		initAddExpr();
		$http.post('/log', {
			msg: "Math requested"
		});
	}
]);