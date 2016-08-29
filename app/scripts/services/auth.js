'use strict';

/**
 * @ngdoc service
 * @name isbHa2App.auth
 * @description
 * # auth
 * Service in the isbHa2App.
 */
angular.module('isbHa2App')
	.service('AuthService', function ($q, $log, $rootScope, $location) {

		/**
		 * Service return object that stores all public methods
		 * @type {{}}
		 */
		var service = {};
		var login = false;

		service.isLoggedIn = function(){
			return login;
		};


		service.authenticate = function(authObject){

			var deferred = $q.defer();

			if(!authObject || !authObject.email || !authObject.password){
				deferred.reject({
					message : 'Invalid Objects!'
				});

				return deferred.promise;
			}

			firebase
				.auth()
				.signInWithEmailAndPassword(authObject.email, authObject.password)
				.then(function(){
					console.log(login);
					login = true;
					console.log('yas' + login);
					service.isLoggedIn();
					$location.path('/logs');
				})
				.catch(function(error) {

					deferred.reject({
						code : error.code,
						message : error.message
					});
				})
			;

			return deferred.promise;
		};

		service.logout = function(){
			firebase.auth().signOut().then(function(){
				$rootScope.$broadcast("auth::logout");
				$log.log('logged out');
			}, function(){
				$log.log('Not logged in!');
			});
		};

		firebase
			.auth()
			.onAuthStateChanged(function(user){
				if(user){
					$rootScope.$broadcast("auth::login",user);
				} else {
					$log.log('Error');
				}

			})
		;

		return service;
	});
