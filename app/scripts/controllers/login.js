'use strict';
/**
 * @ngdoc function
 * @name isbHa2App.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Manages authentication to any active providers.
 */
angular.module('isbHa2App')
	.controller('LoginCtrl', function ($scope, AuthService,$rootScope,$log, $location) {

		$scope.submit = function(email, password) {
			var auth = {
				email : email,
				password: password
		};
			AuthService
				.authenticate(auth)
				.catch(function(error){
					$scope.errorMessage = true;
					$log.log(error);
				})
			;
		};

		$scope.errorMessage = false;

	});