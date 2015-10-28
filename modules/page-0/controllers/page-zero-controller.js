'use strict';

angular.module('page-0', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
        .state('page-0', {
            url: '/',
            templateUrl: 'modules/page-0/templates/page-zero.html',
            controller:'page0Controller'
        })

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

}])

.controller('page0Controller',
	['$scope',
    function($scope){

}])

.controller('sampleCtrl',
	['$scope', 'NAME',
    function($scope, NAME){

    // NAME was the resolved var from URL injected in this controller

    var nameFromUrlParams = NAME;

}])

