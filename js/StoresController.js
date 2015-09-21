suprStor.controller('StorCtrl', function StorCtrl($scope) {
  $scope.stores = [];

  $scope.addStore = function() {
    $scope.stores.push({
      name: $scope.storeName,
      type: $scope.storeType,
      location: $scope.storeLocation,
      squareFootage: $scope.squareFootage
    });

    // Clear input fields
    $scope.name = null;
    $scope.type = null;
    $scope.location = null;
    $scope.squareFootage = null;
  };

  $scope.deleteStore = function(store) {
    var index = $scope.stores.indexOf(store);
    $scope.stores.splice(index, 1);
  };

  //hey i wonder how git works
});
