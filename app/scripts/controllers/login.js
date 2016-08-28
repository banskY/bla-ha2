'use strict';
/**
 * @ngdoc function
 * @name isbHa2App.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Manages authentication to any active providers.
 */
angular.module('isbHa2App')
	.controller('LoginCtrl', function ($scope, AuthService,$rootScope,$log) {
		$scope.auth = {
			email : "s@s.de",
			password:"Hallo1234#"
		};

		$scope.submit = function() {
			AuthService
				.authenticate($scope.auth)
				.catch(function(error){
					$scope.errorMessage = true;
					$log.log(error);
				})
			;
		};

		$scope.errorMessage = false;

	});
