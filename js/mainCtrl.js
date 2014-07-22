var app = angular.module('twitterClone');

app.controller('mainCtrl', function($scope, parseService){
  $scope.test = 'sefoisefjkhsefj';
  $scope.getParseData = function(){
    parseService.getData()
    .then(function(messages){
      $scope.messages = messages
    })
  };

  $scope.postData = function(){
    parseService.postData($scope.message)
    .then(function(data){
      $scope.getParseData();
    })
  };

  $scope.getParseData();
})