angular.module('storeFilters', []).filter('valTrue', function() {
  // This filter will return all key/value pairs for an object where the value is true
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
