suprStor.controller('StorCtrl', function StorCtrl($scope) {
  $scope.stores = [];

  $scope.addStore = function() {
    $scope.stores.push({
      name: $scope.storeName,
      type: {
              hyper: $scope.type.hyper,
              mega: $scope.type.mega,
              super: $scope.type.super,
              ultra: $scope.type.ultra
            },
      location: $scope.storeLocation,
      squareFootage: $scope.squareFootage
    });

    // Clear input fields
    $scope.storeName = null;
    $scope.type.hyper = null;
    $scope.type.mega = null;
    $scope.type.super = null;
    $scope.type.ultra = null;
    $scope.storeLocation = null;
    $scope.squareFootage = null;
  };

  $scope.deleteStore = function(store) {
    var index = $scope.stores.indexOf(store);
    $scope.stores.splice(index, 1);
  };
});
