var app = angular.module('twitterClone');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      //REPLACE LATER
      config.headers = {'X-Parse-Application-Id': '5oA4oab0RNwHkfRrXt5WlMqDnzUu6bcmpf4P2uKy', 'X-Parse-REST-API-Key': 'ZIKuhgCABMrP0kLnSMlEYWYlljNWtHnJzYaKwWc8'}
      return config;
    }
  };
});

app.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                this.value = '';
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter, {'event': event});
                });
                event.preventDefault();
            }
        });
    };
});