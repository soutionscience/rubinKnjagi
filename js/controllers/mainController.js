app.controller('mainController', ['$scope','$http', '$sce', function($scope, $http, $sce){

	$scope.simo ="Simon Muthee";


	$http.get('website_projects.json').then(function(websiteData){

		$scope.myWebsites= websiteData.data;
		$scope.websiteLength= $scope.myWebsites.length

	})
	.catch (function(error){
	console.log("For fucks sake");

});

	
}]);