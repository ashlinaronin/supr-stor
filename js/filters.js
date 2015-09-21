angular.module('storeFilters', []).filter('storeType', function() {
  return function(items, field) {
    var result = {};
    angular.forEach(items, function(value, key) {
      if (value === true) {
        result[key] = value;
      }
    });
    return result;
  };
});
