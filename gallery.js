var app2 = angular.module('app2', ['ngRoute', 'ngAnimate']);

app2.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'page-home.html',
            controller: 'mainController'
    	})
    	.when('/about', {
    		templateUrl: 'page-about.html',
            controller: 'aboutController'
    	})
    	.when('/contact', {
    		templateUrl: 'page-contact.html',
            controller: 'contactController'
    	});

});

app2.factory('UserService', function() {
	var savedData = {}

	function set(data) {
	savedData = data;
	}

	function get() {
	return savedData;
	}

	return {
	set: set,
	get: get
	}

});

// $scope.currentModel = null;

app2.controller('GalleryCtrl2', function($scope, $location, UserService) {
	$scope.models = [
		{urlid : '340b71e8939a417795d1bcf76ef514bd', thumbnail : 'img/tn_IMG_0001.jpg', name: 'Jarven', description : 'A sample picture 1'},
		{urlid : 'a6b9bcd5a2e54c2ea77958aeffe7d874', thumbnail : 'img/tn_IMG_0002.jpg', name: 'Durban Dodo Skeleton', description : 'A sample picture 2'},
		{urlid : '5c6965cc9640450d91ba7d788d4e01fe', thumbnail : 'img/tn_IMG_0003.jpg', name: 'Castelo de Montemor', description : 'A sample picture 3'}
	];
	// myService.set(yourSharedData);

	$scope.setCurrentModel = function(model, path) {
		UserService.set(model);

		$scope.currentModel = model;
		$location.path( path ); 
		console.log('loading and routing', path , ' ' , model.urlid);
	}

	
});

app2.controller('mainController', function($scope) {
	$scope.testValue = 0;
	console.log('tjaa page-home');
    $scope.pageClass = 'page-home';


    // $interval(function() {
    //     $scope.testValue++;
    // }, 500);
});

app2.controller('aboutController', function($scope) {
	console.log('tjaa page-about');
    $scope.pageClass = 'page-about';
});

app2.controller('contactController', function($scope) {
	console.log('tjaa page-contact');
    $scope.pageClass = 'page-contact';
});


app2.controller('GalleryCtrl', function($scope,$location, UserService){
		$scope.models = [
		{urlid : '340b71e8939a417795d1bcf76ef514bd', thumbnail : 'img/tn_IMG_0001.jpg', name: 'Jarven', description : 'A sample picture 1'},
		{urlid : 'a6b9bcd5a2e54c2ea77958aeffe7d874', thumbnail : 'img/tn_IMG_0002.jpg', name: 'Durban Dodo Skeleton', description : 'A sample picture 2'},
		{urlid : '5c6965cc9640450d91ba7d788d4e01fe', thumbnail : 'img/tn_IMG_0003.jpg', name: 'Castelo de Montemor', description : 'A sample picture 3'}
	];

	$scope.currentModel = _.first($scope.images); 


	//$scope.name = UserService.name;
	// $scope.currentModel = null;
	 
	// if($scope.currentModel == null){
	// 	$scope.currentModel = _.first($scope.models);
	// } 
		
	
	// $scope.back = function() {
	// 	console.log('tjaa');
	// }

	// $scope.go = function ( path ) {
	// 	console.log('tjaa');
	//   $location.path( path );
	// };

	// <button ng-click="go('/home')"></button>
 //    <a href="#/!home">Go Home</a>
 //    <a href="#!red">Red</a> 

	$scope.setCurrentModel = function(model, path) {


		console.log('loading and routing', path , ' ' , model.urlid);
		UserService.set(model);
		$scope.currentModel = model;
		
		$location.path( path );
		$scope.loadModel(model); 
		
		

	}


	$scope.loadModel = function(model) {

		$scope.desiredModel = UserService.get();

		console.log('model: ', model);

		if (model == null){
			console.log('$scope.desiredMode is undefined');
			model = $scope.desiredModel;
		}

		if (model === undefined || model === null) {
     		console.log('$scope.desiredMode is undefined2');
     		model = $scope.desiredModel;
		}

        console.log('$scope.desiredModel ', $scope.desiredModel);
        console.log('clicked model.id', model.urlid);
        console.log('$scope.currentModel ', $scope.currentModel);
        var client = null;
	    var version = '1.0.0';


	    var iframe = document.getElementById( 'api-frame' );

	    var client = new Sketchfab(version,iframe);

	    console.log('iframe ', iframe);

	    error = function () {
	        console.error('Sketchfab API Error!');
	    },

	    success = function( api) {
	        api.start();
	    }
        client.init( model.urlid, {
            success: success,
            error: error,
            /* This is where you can add additional options like Autospin */
               // autospin: 0.5
        });

        $scope.currentModel = model;

    }
});





// https://media.sketchfab.com/urls/8d8a1a3844dd41f1b20b76dfc2591ad2/dist/thumbnails/1918fcb09e664f6389de99a0623ed3be/1e4f68bcd7224d479f4b0d97977d529e.jpeg
// https://media.sketchfab.com/urls/340b71e8939a417795d1bcf76ef514bd/dist/thumbnails/7965dfc32873407293b985a7e9e82d6d/7c7b261198bf49ba839603511eec0c7e.jpeg
// https://media.sketchfab.com/urls/60182a48595847dd8832815c1b8e851f/dist/thumbnails/5ecef24f23f64722bc90238f6f609f40/3b2c26eb7476430aabd6825ec6f93397.jpeg