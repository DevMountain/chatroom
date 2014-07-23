var app = angular.module('twitterClone');

app.service('parseService', function($http, $q){
  //Here you'll need to create two methods. One called postData and the other called getData.


  //On the line below create the postData method. This method will add data to the parse backend.
  //The url for the request needs to be 'https://api.parse.com/1/classes/chat'
  //Also, remember that $http returns a promise. So if you return the whole $http call (return $http(...)), you can then use .then in your controller.
  
  //postData method here


  //On the line below create a getData method. This method will retrieve data from the parse backend.
  //The url for the get request should be 'https://api.parse.com/1/classes/chat?order=-createdAt'
  //Make sure that in your post request, the format of the data you sent to parse is an object with a key of text and a value of whatever the message was. IE {text: message}
  /*Also, we want to be able to manipulate the data we get back from parse before we pass it back to our controller. The problem is 
  when we're making a request, we don't know when the response will come back. This sound like a perfect use case for a promise. We can 
  create a promise that resolves with the correct data from parse whenever our $http get requests finishes. 
  /*
  //Because of the way parse sends back their data, let's resolve our promise with data.data.results if you had the original parameter be date like below.
  /* 
    .then(function(data){
      deferred.resolve(data.data.results)
    })
  */

  //getData method here
});