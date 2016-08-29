'use strict';

/**
 * @ngdoc service
 * @name isbHa2App.DBInserts
 * @description
 * # DBInserts
 * Factory in the isbHa2App.
 */
angular.module('isbHa2App')
  .factory('DBInserts', function (RemoteObject) {
	  return RemoteObject.createCollection('type', 'msg', 'logs/');
  });