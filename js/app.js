var app = angular.module('twitterClone', []);

app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
  // Parse.initialize("5oA4oab0RNwHkfRrXt5WlMqDnzUu6bcmpf4P2uKy", "aZGR1U5AyBRbH928r4YgyM25SIYOWTB35z3dtsxg");
});