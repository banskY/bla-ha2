'use strict';

/**
 * @ngdoc service
 * @name isbHa2App.Collection
 * @description
 * # Collection
 * Service in the isbHa2App.
 */
angular.module('isbHa2App')
  .service('Collection', function ($window, $q, $log) {
	  function Collection(settings){

		  if(!settings.type || !settings.path || !settings.msg){
			  throw new Error('Collection:: Missing Parameters');
		  }

		  if(!$window.database){
			  throw new Error('Database object not available');
		  }

		  var self = this;


		  this.type = settings.type;
		  this.msg = settings.msg;
		  this.path = settings.path;
		  this.realtime = settings.realtime;

		  var reference = $window.database.ref(this.path);

		  function prepareModel(model){
			  var data = {};

			  _.each(model, function(value, key){

				  if(!_.isFunction(value)){

					  if(typeof value !== 'undefined'){
						  data[key] = _.isDate(value) ? value.getTime() : value;
					  }
				  }
			  });
			  return data;

		  }

		  /**
		   *
		   * @param model
		   * @returns {Promise}
		   */
		  this.insert = function(model){
			  var deferred = $q.defer();

			  reference
				  .push(prepareModel(model))
				  .then(function(result){
					  deferred.resolve(result);
				  })
				  .catch(function(error){
					  deferred.reject(error);
				  })
			  ;

			  return deferred.promise;
		  };

		  this.remove = function(reference){

		  };

		  this.find = function(options){

		  };

		  this.list = function(){

			  var deferred = $q.defer();

			  reference
				  //.once('value')
				  /*.then(function(snapshot){
						console.log(snapshot);
					  var items = [];

					  _.each(snapshot.val(), function(value, key){

						  var properties = {
							  id : key
						  };

						  items.push(
							  new self.model(
								  _.extend(properties, value)
							  )
						  );
					  });

					  deferred.resolve(items);

				  })*/
/*				  .on("value", function(snapshot) {
					  deferred.data = snapshot.val();
					  console.log(deferred.data);
				  }, function (errorObject) {
					  console.log("The read failed: " + errorObject.code);
				  })*/
				  .once('value')
					.then(function(snapshot){
						var data = snapshot.val();
						console.log(data);
						deferred.resolve(data);
					})
			  ;
			  return deferred.promise;

		  }

	  }
	  return Collection;
  });
