var app = angular.module('twitterClone');

app.service('parseService', function($http, $q){
  this.postData = function(message){
    var deferred = $q.defer();
    var url = 'https://api.parse.com' + '/1/classes/chat';
    $http({
      method: 'POST',
      data: {text: message},
      url: url
    }).then(function(data){
      deferred.resolve(data)
    })
    return deferred.promise;
  };

  this.getData = function(){
    var deferred = $q.defer();
    var url = 'https://api.parse.com' + '/1/classes/chat' + '?order=-createdAt';
    $http({
      method: 'GET',
      url: url
    }).then(function(data){
      deferred.resolve(data.data.results)
    })
    return deferred.promise;
  };
});