'use strict';

/* Controllers */

angular.module('app.controllers', [])
  .controller('SignIn', ['$scope', '$location', function($scope, $location) {
    $scope.username = '';
    $scope.title = 'Sign In';
    $scope.signIn = function() {
      $location.path('/stream/' + $scope.username);
    };
  }])
  .controller('Stream', [
    'TwitterApi', '$scope', '$routeParams', '$location',
    function(TwitterApi, $scope, $routeParams, $location) {

    var count = 10;
    var maxId = '';

    $scope.loaded = false;
    $scope.title = 'Steam';
    $scope.tweets = [];
    $scope.error = null;
    $scope.finished = false;

    $scope.load = function() {
      $scope.loading = true;
      if ($scope.tweets.length) {
        maxId = $scope.tweets[$scope.tweets.length-1].id;
      }
      TwitterApi.get({
        username: $routeParams.username,
        count: count,
        maxId: maxId
      }, function(response) {

        $scope.loaded = true;
        $scope.loading = false;

        if (!($scope.error = (response.error))) {
          if (maxId) {
            response.success.shift();
          }
          if (response.success.length) {
            $scope.tweets = $scope.tweets.concat(response.success);
          } else {
            $scope.finished = true;
          }
        }
      });
    };

    $scope.viewTweet = function(id) {
      window.location = 'https://twitter.com/' + $scope.username + '/status/' + id;
    };

    $scope.load();
  }]);
