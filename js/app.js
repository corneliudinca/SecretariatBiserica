(function() {
  var app = angular.module('churchSecretaryApp', []);

  app.directive('appMenu', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/app-menu.html',
		controller: function(){
		},
		controllerAs: 'menu'
	};
  });
  
  app.directive('churchesListing', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/churches-listing.html',
		controller: function(){
		},
		controllerAs: 'churches'
	};
  });
  
})();
