'use strict';

/**
 * @ngdoc service
 * @name isbHa2App.DBInsert
 * @description
 * # DBInsert
 * Factory in the isbHa2App.
 */
angular.module('isbHa2App')
  .factory('DBInsert', function () {
	  function DBInsert(){
		  this.type  = undefined;
		  this.msg  = undefined;
	  }
	  return DBInsert;
  });
