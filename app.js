'use strict';

var app = angular.module('app', [
	'ui.router',
	'services',
]).config(['$stateProvider', '$locationProvider', '$httpProvider', '$urlRouterProvider',
	function($stateProvider, $locationProvider, $httpProvider, $urlRouterProvider) {

    // configs goes here e.g. facebook init
    // google maps init, analytics init

    $stateProvider
        .state('page-0', {
            url: '/',
            templateUrl: 'modules/page-0/page-zero.html',
            controller:'page0Controller'
        })
        // Sample state
        .state('sample', {
            url: '/sample/:name',
            templateUrl: 'some/path/to/temlate',
            controller:'sampleCtrl',
            resolve: {
                // you can then inject this 'NAME' to the 
                // controller to handle the data.
                NAME: function($stateParams){
                    return $stateParams.name; // this will return the name from url.
                }
            }
        })

        .state('page-1', { // state name usage : <a ui-sref="page-1">Will go to page 1</a>
            url: '/page-1', // will appear on url bar
            templateUrl: 'modules/page-1/page-one.html', // url template
            controller:'page1Controller' // controller
        })

        .state('page-2', {
            url: '/page-2',
            templateUrl: 'modules/page-2/page-two.html',
            controller:'page2Controller'
        })

}])

// see how this is binded to navbar, see navbar.html 
.controller('navbarController',
    ['$scope',
    function($scope){

}])