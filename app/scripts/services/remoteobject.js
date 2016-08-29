'use strict';

/**
 * @ngdoc service
 * @name isbHa2App.RemoteObject
 * @description
 * # RemoteObject
 * Service in the isbHa2App.
 */
angular.module('isbHa2App')
	.service('RemoteObject', function (Collection) {

		var service = {};

		service.createCollection = function(type, msg, path, realtime){

			if(!type || !path || !msg){
				throw new Error('remoteObject:: Missing parameter in Object')
			}
			return new Collection({
				type : type,
				path : path,
				msg  : msg,
				realtime : realtime
			});
		};
		return service;
	});
