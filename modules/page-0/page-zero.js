app.controller('page0Controller',
	['$scope',
    function($scope){

}])

.controller('sampleCtrl',
	['$scope', 'NAME',
    function($scope, NAME){

    // NAME was the resolved var from URL injected in this controller

    var nameFromUrlParams = NAME;

}])