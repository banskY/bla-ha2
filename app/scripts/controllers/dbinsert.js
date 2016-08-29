'use strict';

/**
 * @ngdoc function
 * @name isbHa2App.controller:DbinsertCtrl
 * @description
 * # DbinsertCtrl
 * Controller of the isbHa2App
 */
angular.module('isbHa2App')
  .controller('DbinsertCtrl', function ($scope, DBInserts, $log) {
	  $scope.submit = function(type, msg) {
		  console.log(type + ' ' + msg);
			var dbinsert = {
				type : type,
				msg: msg,
				time: Date.now()
			};
		  	console.log(dbinsert);
			DBInserts
				.insert(dbinsert);
		};
	  $scope.errorMessage = false;
  });
