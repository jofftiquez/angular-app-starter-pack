'use strict';

angular.module('page-2', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
        .state('page-2', {
            url: '/page-2',
            templateUrl: 'modules/page-2/templates/page-two.html',
            controller:'page2Controller'
        })

}])

/*inject other services in this 
controller on in other controller
that requires thos service.*/
.controller('page2Controller',
	['$scope', 'getRequestService', 'postRequestService',
    function($scope, getRequestService, postRequestService){

    // to be used on view see /page-2
    $scope.persons = getRequestService.getPersons();
    $scope.newperson = {};

    $scope.alertPersonInfo = function(e){
    	var x = "{ name : "+ e.name +" } \n { age : "+ e.age +"} \n { gender : "+ e.gender +" }";
    	alert(x);
    }

    $scope.addToPersons = function(){
    	$scope.persons.push($scope.newperson);

    	// postRequestService.addPersonSample($scope.newperson)
    	// 	.then(function(response){ // promise from service post is resolved
    	// 		// do something
    	// 	}, function(error){ // promise rejected
    	// 		// handle error
    	// 	})

    	$scope.newperson = {};
    }
}])
