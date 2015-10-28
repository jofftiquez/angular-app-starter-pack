angular.module('services', [])

// TIP : You can use a service if you need a certain data
// 	  to be global and accessible to all controllers
// 	  across the app. E.g. this 'azureCDN' service below.
// 	  Just inject this to any controller and you can now user
// 	  the service. 
// 	  Usage : azureCDN.getURL() this will return the url
// 	  		  $scope.url = azureCDN.getURL();
// 			  $scope.img = 'img1.png'
//			  <img src="{{ url }}{{ img }}">

.service('azureCDN', function(){
    return {
        getURL : function(){
            return "https://d1ujtdmo5j6yit.cloudfront.net/images/";
        }
    }
})

// See in action on page2Controller
.service('getRequestService', function($q /*, anotherService, anotherService2*/){ // make sure that $q is injected, to use another service just inject the service name here
    return {
        getPersons : function(){
        	var persons = [
        		{
        			name : "joff",
        			age : "22",
        			gender : "M"
        		},
        		{
        			name : "erick",
        			age : "23",
        			gender : "M"
        		},
        		{
        			name : "geo",
        			age : "2?",
        			gender : "M"
        		}
        	];
            return persons;
        },
        // using angular $http.get() with promise
        getSample2 : function(){ 
        	return $http.get('/foo/bar')
                .then(function(response) { // if promise is resolved
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        return $q.reject(response.data);
                    }
                }, function(response) { // otherwise if not
                    return $q.reject(response.data);
                });
        }
    }
})

.service('postRequestService', function($q){ // make sure that $q is injected
    return {
        addPersonSample : function(person){ 
        	return $http.post('/foo/bar') // see angular docu
                .then(function(response) { // if promise is resolved
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        return $q.reject(response.data);
                    }
                }, function(response) { // otherwise if not
                    return $q.reject(response.data);
                });
        }
    }
})

.service('putRequestService', function($q){ // make sure that $q is injected
    return {
        putSample1 : function(){ 
        	return $http.put('/foo/bar', data, config) // see angular docu
                .then(function(response) { // if promise is resolved
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        return $q.reject(response.data);
                    }
                }, function(response) { // otherwise if not
                    return $q.reject(response.data);
                });
        }
    }
})

.service('deleteRequestService', function($q){ // make sure that $q is injected
    return {
        deleteSample1 : function(){ 
        	return $http.delete('/foo/bar', data, config) // see angular docu
                .then(function(response) { // if promise is resolved
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        return $q.reject(response.data);
                    }
                }, function(response) { // otherwise if not
                    return $q.reject(response.data);
                });
        },
        deleteSample2 : function(){ 
        	return $http.delete('/foo/bar')
                .then(function(response) { // if promise is resolved
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        return $q.reject(response.data);
                    }
                }, function(response) { // otherwise if not
                    return $q.reject(response.data);
                });
        },
    }
})