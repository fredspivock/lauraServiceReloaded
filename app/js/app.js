var lauraService = angular.module("lauraServiceApp", [
	'ngRoute',
	'lauraServiceControllers',
	'ngSanitize',
	'lauraServiceDirectives',
	'ngAnimate'
	
	]);

lauraService.config(['$routeProvider', function($routeProvider){

	
	$routeProvider.
	when('/projects', {
		templateUrl: 'partials/homepage.html',
		controller: 'HomepageCtrl'

	}).
	when('/projects/:id', {
		templateUrl:'partials/project.html',
		controller:'ProjectCtrl'
	}).
	when('/about', {

		templateUrl:'partials/about.html',
		controller:'AboutCtrl'

	}).
	when('/services', {

		templateUrl:'partials/about.html',
		controller:'AboutCtrl'

	}).
	otherwise({
	
		redirectTo:'/projects'
	});

}]);

