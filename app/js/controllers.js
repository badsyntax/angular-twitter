'use strict';

/* Controllers */

angular.module('app.controllers', [])
  .controller('SignIn', ['$location', '$scope', function($location, $scope) {
    $scope.username = '';
    $scope.title = 'Sign In';
    $scope.signIn = function() {
      $location.path('/stream/' + $scope.username);
    };
  }])
  .controller('Stream', ['$scope', function($scope) {
    $scope.title = 'Steam';
  }]);
