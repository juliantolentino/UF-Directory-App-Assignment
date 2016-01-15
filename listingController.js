angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    $scope.wantDetails = false;
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
    	$scope.listings = $scope.listings.concat([
    	{"code": $scope.newCode,
    	"name": $scope.newBuildingName,
		"coordinates":{
			"latitude": $scope.newLatitude,
			"longitude": $scope.newLongitude,
		},
		"address": $scope.newAddress}
		])
    };
    $scope.deleteListing = function(index) {
    	$scope.listings.splice(index,1);
    };

    //checks to see if the coordinates field exists
    $scope.showDetails = function(index) {
    	$scope.wantDetails = true;
    	if(angular.isUndefined($scope.listings[index].coordinates)){
    		$scope.detailedLat="No info."
    		$scope.detailedLon="No info."
    	}
    	else{
    		$scope.detailedLat = $scope.listings[index].coordinates.latitude;
    		$scope.detailedLon = $scope.listings[index].coordinates.longitude;

    	}
    	if(angular.isUndefined($scope.listings[index].address)){
    		$scope.detailedAdd="No info."
    	}
		else{
    		$scope.detailedAdd = $scope.listings[index].address;
		}





    };
  }
]);