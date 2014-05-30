angular.module('app').service('service', ['$http', function ($http) {

	this.getData = function() {
    return $http.get('/url').then(function(response) {
      return response || null;
    }, function(response) {
      switch(response.status)
      {
        default:
        throw 'no data';
      }
    });
  };

}]);
