var app2 = angular.module('app2', []);

app2.controller('GalleryCtrl', function($scope){
		$scope.images = [
		{image : '60182a48595847dd8832815c1b8e851f', thumbnail : 'img/tn_IMG_0001.jpg', description : 'A sample picture 1'},
		{image : 'a6b9bcd5a2e54c2ea77958aeffe7d874', thumbnail : 'img/tn_IMG_0002.jpg', description : 'A sample picture 2'},
		{image : '5c6965cc9640450d91ba7d788d4e01fe', thumbnail : 'img/tn_IMG_0003.jpg', description : 'A sample picture 3'}
	];

	$scope.currentImage = _.first($scope.images);

	$scope.setCurrentImage = function(image) {
		$scope.currentImage = image;
	}

	

	$scope.loadModel = function(urlid) {
        console.log('loading a model');
        var client = null;
	    var version = '1.0.0';

	    var iframe = document.getElementById( 'api-frame2' );

	    var client = new Sketchfab(version,iframe);

	    error = function () {
	        console.error('Sketchfab API Error!');
	    },

	    success = function( api) {
	        api.start();
	    }
        client.init( urlid, {
            success: success,
            error: error,
            /* This is where you can add additional options like Autospin */
               // autospin: 0.5
        });

    }
});





// https://media.sketchfab.com/urls/8d8a1a3844dd41f1b20b76dfc2591ad2/dist/thumbnails/1918fcb09e664f6389de99a0623ed3be/1e4f68bcd7224d479f4b0d97977d529e.jpeg
// https://media.sketchfab.com/urls/340b71e8939a417795d1bcf76ef514bd/dist/thumbnails/7965dfc32873407293b985a7e9e82d6d/7c7b261198bf49ba839603511eec0c7e.jpeg
// https://media.sketchfab.com/urls/60182a48595847dd8832815c1b8e851f/dist/thumbnails/5ecef24f23f64722bc90238f6f609f40/3b2c26eb7476430aabd6825ec6f93397.jpeg