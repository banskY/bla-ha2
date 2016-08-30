'use strict';

/**
 * @ngdoc function
 * @name isbHa2App.controller:DblogsCtrl
 * @description
 * # DblogsCtrl
 * Controller of the isbHa2App
 */
angular.module('isbHa2App')
  .controller('DblogsCtrl', function ($scope, DBInserts, $log) {
	  var indexedData = [];
	  $scope.data = [];
    $scope.init = function() {
		DBInserts.list()
			.then(function(list){
				_.each(list, function(value, key, index){
					$scope.data.push(
						_.extend(value, {id: key})
					);
					//$scope.data[index] = value;
					//console.log($scope.data);
				});
				//$scope.data = indexedData;
				console.log($scope.data);
			});

/*		_.each(DBLogs, function (value, key) {
			bla[key] = value;
		});
		console.log(bla);*/
	}
  });
