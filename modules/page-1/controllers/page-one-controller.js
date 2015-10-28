'use strict';

angular.module('page-1', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
        .state('page-1', { // state name usage : <a ui-sref="page-1">Will go to page 1</a>
            url: '/page-1', // will appear on url bar
            templateUrl: 'modules/page-1/templates/page-one.html', // url template
            controller:'page1Controller' // controller
        })

}])

.controller('page1Controller',
	['$scope',
    function($scope){



}])

// Tip : You can also add multiple controllers on single controller file
