var app2 = angular.module('app2', []);

app2.controller('ctrl1', function($scope){
		$scope.randomNum1 = Math.floor((Math.random()*10)+1);
		$scope.randomNum2 = Math.floor((Math.random()*10)+1);
});

app2.controller('badCtrl', function($scope){
		var badFeelings = ["tired", "sad", "mad", "week"];

		$scope.bad = badFeelings[Math.floor((Math.random()*4))];
});

app2.controller('goodCtrl', function($scope){
		var goodFeelings = ["happy", "glad", "nice", "kind"];

		$scope.good = goodFeelings[Math.floor((Math.random()*4))];
});

app2.controller('gListCtrl', function($scope){
		$scope.groceries= [
			{item: "Tomatoes", purchased: false},
			{item: "Potatoes", purchased: false},
			{item: "Bread", purchased: false},
			{item: "Hummus", purchased: false},
		];

		$scope.getList = function(){
			return $scope.showList ? "ulgrocerylist.html" : "olgrocerylist.html"
		};
});
app2.controller('eventCtrl', function($scope){
		var goodFeelings = ["happy", "glad", "nice", "kind"];

		$scope.blur=0;
		$scope.disableButton = true;

		$scope.daytimeButton = true;


});