'use strict';

var mojobwebadmin = angular.module('mojobwebadmin', [
	'ui.router',
	'services',
    'page-0',
    'page-1',
    'page-2',
])

.config(['$stateProvider', '$locationProvider', '$httpProvider', '$urlRouterProvider',
	function($stateProvider, $locationProvider, $httpProvider, $urlRouterProvider) {

    // configs goes here e.g. facebook init
    // google maps init, analytics init

}])

// see how this is binded to navbar, see navbar.html 
.controller('navbarController',
    ['$scope',
    function($scope){

}])